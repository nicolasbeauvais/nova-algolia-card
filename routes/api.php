<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/{index?}', \NicolasBeauvais\NovaAlgoliaCard\Http\Controllers\AlgoliaController::class.'@index');
