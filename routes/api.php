<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CoffeeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
});


Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::apiResource('coffees', CoffeeController::class);
Route::apiResource('users', \App\Http\Controllers\Api\UserController::class);
