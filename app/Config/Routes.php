<?php
use CodeIgniter\Router\RouteCollection;
/** @var RouteCollection $routes */
$routes->get('/', 'Home::index');
$routes->get('services', 'Home::index');
$routes->get('services/(:segment)', 'Home::index');
$routes->get('services/(:segment)/(:segment)', 'Home::index');
$routes->get('packages', 'Home::index');
$routes->get('portfolio', 'Home::index');
$routes->get('technologies', 'Home::index');
$routes->get('about', 'Home::index');
$routes->get('contact', 'Home::index');
$routes->get('terms-and-policies', 'Home::index');
$routes->get('api/projects', 'Home::projects');
$routes->post('api/contact', 'Home::contact');
