<?php
namespace App\Controllers;
use CodeIgniter\Config\DotEnv;
use CodeIgniter\HTTP\ResponseInterface;
use Config\Services;

class Home extends BaseController
{
    public function index(): ResponseInterface|string
    {
        // Built by scripts/build-seo.mjs from the React service catalog.
        $file = APPPATH . 'Data/seo.json';
        $seo = is_file($file) ? (json_decode(file_get_contents($file), true) ?? []) : [];
        $path = '/' . trim(uri_string(), '/');

        if (isset($seo['redirects'][$path])) {
            return $this->response->setStatusCode(301)->setHeader('Location', $seo['redirects'][$path]);
        }

        $page = $seo['routes'][$path] ?? null;
        if ($page === null && $seo !== []) {
            // Unknown service address: the app still loads and sends the visitor on, but search engines get a real 404.
            $this->response->setStatusCode(404);
        }

        return view('app', [
            'title' => $page['title'] ?? $seo['fallback']['title'] ?? 'WebsKode | Website, Software & App Development',
            'description' => $page['description'] ?? $seo['fallback']['description'] ?? 'WebsKode builds websites, software, data systems and mobile apps, backed by digital marketing and SEO.',
            'canonical' => $page['canonical'] ?? null,
            'image' => $seo['image'] ?? null,
            'jsonLd' => $page === null ? [] : array_merge($seo['siteJsonLd'], $page['jsonLd']),
            'assets' => $this->assets(),
        ]);
    }

    /**
     * The files of the current Vite build, read from its manifest because their names change with every build.
     * The stylesheet is returned as text so the page can carry it inline instead of waiting on a second request.
     */
    private function assets(): array
    {
        $file = FCPATH . 'build/manifest.json';
        $manifest = is_file($file) ? (json_decode(file_get_contents($file), true) ?? []) : [];
        $entry = $manifest['index.html'] ?? [];

        $css = '';
        foreach ($entry['css'] ?? [] as $sheet) {
            $css .= file_get_contents(FCPATH . $sheet);
        }

        return [
            'script' => isset($entry['file']) ? '/' . $entry['file'] : null,
            'imports' => array_map(static fn ($name) => '/' . $manifest[$name]['file'], $entry['imports'] ?? []),
            'css' => $css,
            // Only the basic Latin fonts are needed by every page; the extended sets load on demand.
            'fonts' => array_map(static fn ($font) => '/' . $font, preg_grep('/-latin-(?!ext-)[^\/]+\.woff2$/', $entry['assets'] ?? [])),
        ];
    }

    public function projects(): ResponseInterface
    {
        return $this->response->setJSON([
            ['id'=>1,'title'=>'TravelOPedia India','type'=>'Travel & event platform','year'=>'2026','color'=>'#ff5a1f','url'=>'https://travelopediaindia.com/'],
            ['id'=>2,'title'=>'SR Diesel Trading','type'=>'Fuel trading website','year'=>'2026','color'=>'#ff8a4c','url'=>'https://srdieseltrading.com/'],
            ['id'=>3,'title'=>'Northland Realty','type'=>'Real-estate platform','year'=>'2025','color'=>'#ffd8c2','url'=>'https://northlandrealty.in/'],
        ]);
    }

    public function contact(): ResponseInterface
    {
        $data = $this->request->getJSON(true) ?? [];
        $rules = ['name'=>'required|min_length[2]|max_length[80]','email'=>'required|valid_email|max_length[120]','mobile'=>'required|regex_match[/^\+?[0-9 ]{10,20}$/]','message'=>'required|min_length[10]|max_length[1000]'];
        if (! $this->validateData($data, $rules)) {
            return $this->response->setStatusCode(422)->setJSON(['ok'=>false,'errors'=>$this->validator->getErrors()]);
        }
        $emailConfig = config('Email');
        if ($emailConfig->SMTPUser === '' || $emailConfig->SMTPPass === '') {
            $smtpSettings = (new DotEnv(FCPATH))->parse() ?? [];
            $emailConfig->SMTPUser = $emailConfig->SMTPUser ?: ($smtpSettings['email.SMTPUser'] ?? '');
            $emailConfig->SMTPPass = $emailConfig->SMTPPass ?: ($smtpSettings['email.SMTPPass'] ?? '');
            $emailConfig->SMTPHost = $smtpSettings['email.SMTPHost'] ?? $emailConfig->SMTPHost;
        }
        if ($emailConfig->SMTPUser === '' || $emailConfig->SMTPPass === '') {
            log_message('error', 'Contact enquiry email is not configured: SMTP credentials are missing.');
            return $this->response->setStatusCode(503)->setJSON(['ok'=>false,'message'=>'We could not send your enquiry right now. Please try again later.']);
        }
        $email = Services::email($emailConfig, false);
        $email->setFrom($emailConfig->fromEmail, $emailConfig->fromName);
        $email->setTo('info@webskode.com');
        $email->setReplyTo($data['email'], $data['name']);
        $email->setSubject('New website enquiry');
        $email->setMessage("Name: {$data['name']}\nEmail: {$data['email']}\nMobile: {$data['mobile']}\n\nMessage:\n{$data['message']}");
        if (! $email->send()) {
            log_message('error', 'Contact enquiry email could not be sent via {host}: {reason}', ['host' => $emailConfig->SMTPHost, 'reason' => trim(strip_tags($email->printDebugger([])))]);
            return $this->response->setStatusCode(503)->setJSON(['ok'=>false,'message'=>'We could not send your enquiry right now. Please try again later.']);
        }
        return $this->response->setJSON(['ok'=>true,'message'=>'Thanks — we’ll be in touch within one business day.']);
    }
}
