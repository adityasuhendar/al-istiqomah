<?php

use App\Http\Controllers\PrestasiController;
use App\Http\Controllers\EkstrakurikulerController;
use App\Http\Controllers\ModulController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BeritaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $ekstrakurikuler = app(EkstrakurikulerController::class)->welcomeIndex();
    $prestasi = app(PrestasiController::class)->welcomeIndex();
    return Inertia::render('Welcome', [
        'ekstrakurikuler' => $ekstrakurikuler,
        'prestasi' => $prestasi,
    ]);
});

Route::get('/sambutan', function () {
    return Inertia::render('Greeting');
})->name('greeting');

Route::get('/staffs', [StaffController::class, 'guestIndex'])->name('staffs.guest');

Route::get('/berita', [BeritaController::class, 'guestIndex'])->name('news');

Route::get('/berita/{berita}', [BeritaController::class, 'show'])->name('news.show');

Route::get('/modul', [ModulController::class, 'guestIndex'])->name('modul.guest');

Route::get('/sejarah', function () {
    return Inertia::render('History');
})->name('history');

Route::get('/ekstrakurikuler/{ekstrakurikuler}', [EkstrakurikulerController::class, 'show'])->name('ekstrakurikuler.show');

Route::get('/prestasi', [PrestasiController::class, 'guestIndex'])->name('prestasi.guest');


Route::middleware(['auth'])->prefix('admin')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');

    Route::controller(BeritaController::class)->group(function () {
        Route::get('/berita', 'index')->name('admin.berita.index');
        Route::post('/berita', 'store')->name('admin.berita.store');
        Route::post('/berita/{berita}', 'update')->name('admin.berita.update');
        Route::delete('/berita/{berita}', 'destroy')->name('admin.berita.destroy');
    });

    Route::controller(ModulController::class)->group(function () {
        Route::get('/modul', 'index')->name('admin.modul.index');
        Route::post('/modul', 'store')->name('admin.modul.store');
        Route::post('/modul/{modul}', 'update')->name('admin.modul.update');
        Route::delete('/modul/{modul}', 'destroy')->name('admin.modul.destroy');
    });

    Route::controller(StaffController::class)->group(function () {
        Route::get('/staff', 'index')->name('admin.staff.index');
        Route::post('/staff', 'store')->name('admin.staff.store');
        Route::post('/staff/{staff}', 'update')->name('admin.staff.update');
        Route::delete('/staff/{staff}', 'destroy')->name('admin.staff.destroy');
    });

    Route::controller(EkstrakurikulerController::class)->group(function () {
        Route::get('/ekstrakurikuler', 'index')->name('admin.ekstrakurikuler.index');
        Route::post('/ekstrakurikuler', 'store')->name('admin.ekstrakurikuler.store');
        Route::post('/ekstrakurikuler/{ekstrakurikuler}', 'update')->name('admin.ekstrakurikuler.update');
        Route::delete('/ekstrakurikuler/{ekstrakurikuler}', 'destroy')->name('admin.ekstrakurikuler.destroy');
    });

    Route::controller(PrestasiController::class)->group(function () {
        Route::get('/prestasi', 'index')->name('admin.prestasi.index');
        Route::post('/prestasi', 'store')->name('admin.prestasi.store');
        Route::post('/prestasi/{prestasi}', 'update')->name('admin.prestasi.update');
        Route::delete('/prestasi/{prestasi}', 'destroy')->name('admin.prestasi.destroy');
    });

    Route::get('/profile', function() {
        return Inertia::render('Admin/Profile/Index');
    })->name('admin.profile.index');
});

require __DIR__.'/auth.php';
