<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class InertiaPagesController extends Controller
{

    public function dashboard()
    {
        Inertia::setRootView('admin/app');
        return Inertia::render('Admin/Dashboard');
    }

    public function user()
    {
        Inertia::setRootView('admin/app');
        return Inertia::render('Admin/User');
    }

    public function category()
    {
        Inertia::setRootView('admin/app');
        return Inertia::render('Admin/Category');
    }

    public function tag()
    {
        Inertia::setRootView('admin/app');
        return Inertia::render('Admin/Tag');
    }

    public function menu()
    {
        Inertia::setRootView('admin/app');
        return Inertia::render('Admin/Menu');
    }

    public function logout()
    {
        Auth::logout();
        return Inertia::location(url('admin/login'));
    }
}
