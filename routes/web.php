<?php

use App\Http\Controllers\Admin\InertiaPagesController;
use App\Http\Controllers\Client\InertiaPagesController as InertiaClientPagesController;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Client\LoginController as ClientLoginController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AuthMiddleware;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('login', [ClientLoginController::class, 'index']);
Route::post('login', [ClientLoginController::class, 'login']);

Route::name('client.')->middleware([AuthMiddleware::class])->controller(InertiaClientPagesController::class)->group(function () {
   Route::get('/', 'dashboard')->name('index');
   Route::get('/menu/{id}', 'detail')->name('detail');
   Route::get('/logout', 'logout')->name('logout');
});

Route::prefix('admin')->group(function () {
   // login
   Route::get('login', [LoginController::class, 'index']);
   Route::post('login', [LoginController::class, 'login']);

   Route::name('admin.')->middleware([AuthMiddleware::class])->controller(InertiaPagesController::class)->group(function () {
      Route::get('/', 'dashboard')->name('index');
      Route::get('/dashboard', 'dashboard')->name('dashboard');
      Route::get('/user', 'user')->name('user');
      Route::get('/category', 'category')->name('category');
      Route::get('/tag', 'tag')->name('tag');
      Route::get('/menu', 'menu')->name('menu');
      Route::get('/logout', 'logout')->name('logout');
   });
});




Route::prefix('api')->group(function () {
   Route::name('user.')->prefix('user')->controller(UserController::class)->group(function () {
      Route::get('/', 'all')->name('all');
      Route::post('/', 'store')->name('store');
      Route::get('/{id}', 'show')->name('show');
      Route::put('/{id}', 'update')->name('update');
      Route::delete('/{id}', 'delete')->name('delete');
   });

   Route::name('category.')->prefix('category')->controller(CategoryController::class)->group(function () {
      Route::get('/select', 'select')->name('select');
      Route::get('/', 'all')->name('all');
      Route::post('/', 'store')->name('store');
      Route::get('/{id}', 'show')->name('show');
      Route::put('/{id}', 'update')->name('update');
      Route::delete('/{id}', 'delete')->name('delete');
   });

   Route::name('tag.')->prefix('tag')->controller(TagController::class)->group(function () {
      Route::get('/select', 'select')->name('select');
      Route::get('/', 'all')->name('all');
      Route::post('/', 'store')->name('store');
      Route::get('/{id}', 'show')->name('show');
      Route::put('/{id}', 'update')->name('update');
      Route::delete('/{id}', 'delete')->name('delete');
   });

   Route::name('menu.')->prefix('menu')->controller(MenuController::class)->group(function () {
      Route::post('/rate/{id}', 'rate')->name('rate');
      Route::get('/', 'all')->name('all');
      Route::post('/', 'store')->name('store');
      Route::get('/{id}', 'show')->name('show');
      Route::put('/{id}', 'update')->name('update');
      Route::delete('/{id}', 'delete')->name('delete');
   });
});
