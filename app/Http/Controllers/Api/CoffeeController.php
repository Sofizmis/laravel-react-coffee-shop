<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Coffee;
use App\Http\Requests\StoreCoffeeRequest;
use App\Http\Requests\UpdateCoffeeRequest;
use App\Http\Resources\CoffeeResource;

class CoffeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return CoffeeResource::collection(
            Coffee::query()->orderBy('id', 'desc')->paginate(10)
        );
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCoffeeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Coffee $coffee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCoffeeRequest $request, Coffee $coffee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Coffee $coffee)
    {
        //
    }
}
