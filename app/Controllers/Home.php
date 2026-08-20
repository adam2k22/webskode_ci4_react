<?php
namespace App\Controllers;
use CodeIgniter\HTTP\ResponseInterface;

class Home extends BaseController
{
    public function index(): string { return view('app'); }

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
        $rules = ['name'=>'required|min_length[2]|max_length[80]','email'=>'required|valid_email|max_length[120]','message'=>'required|min_length[10]|max_length[1000]'];
        if (! $this->validateData($data, $rules)) {
            return $this->response->setStatusCode(422)->setJSON(['ok'=>false,'errors'=>$this->validator->getErrors()]);
        }
        return $this->response->setJSON(['ok'=>true,'message'=>'Thanks — we’ll be in touch within one business day.']);
    }
}
