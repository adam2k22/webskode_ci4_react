<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff5a1f">
    <title><?= esc($title) ?></title>
    <meta name="description" content="<?= esc($description) ?>">
<?php if ($canonical !== null): ?>
    <link rel="canonical" href="<?= esc($canonical) ?>">
    <meta property="og:url" content="<?= esc($canonical) ?>">
<?php endif ?>
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="WebsKode">
    <meta property="og:locale" content="en_IN">
    <meta property="og:title" content="<?= esc($title) ?>">
    <meta property="og:description" content="<?= esc($description) ?>">
<?php if ($image !== null): ?>
    <meta property="og:image" content="<?= esc($image) ?>">
<?php endif ?>
    <meta name="twitter:card" content="summary">
<?php if ($jsonLd !== []): ?>
    <script type="application/ld+json"><?= json_encode(['@context' => 'https://schema.org', '@graph' => $jsonLd], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_HEX_TAG) ?></script>
<?php endif ?>
    <link rel="icon" type="image/svg+xml" href="/webskode-icon.svg?v=4">
    <link rel="shortcut icon" type="image/svg+xml" href="/webskode-icon.svg?v=4">
<?php foreach ($assets['fonts'] as $font): ?>
    <link rel="preload" as="font" type="font/woff2" href="<?= esc($font) ?>" crossorigin>
<?php endforeach ?>
<?php foreach ($assets['imports'] as $import): ?>
    <link rel="modulepreload" href="<?= esc($import) ?>">
<?php endforeach ?>
    <style><?= $assets['css'] ?></style>
<?php if ($assets['script'] !== null): ?>
    <script type="module" src="<?= esc($assets['script']) ?>"></script>
<?php endif ?>
</head>
<body><div id="root"></div></body>
</html>
