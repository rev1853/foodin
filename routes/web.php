<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\InertiaPagesController;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\UserController;
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

Route::prefix('admin')->group(function () {
   // login
   Route::get('login', [LoginController::class, 'index']);
   Route::post('login', [LoginController::class, 'login']);

   Route::name('admin.')->controller(InertiaPagesController::class)->group(function () {
      Route::get('/', 'dashboard')->name('index');
      Route::get('/dashboard', 'dashboard')->name('dashboard');
      Route::get('/user', 'user')->name('user');
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
});
