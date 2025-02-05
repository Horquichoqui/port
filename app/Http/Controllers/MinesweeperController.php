<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MinesweeperController extends Controller
{
    public function index()
    {
        return view('minesweeper');
    }

    public function play(Request $request)
    {
        $rows = 5;
        $cols = 5;
        $mines = 5;
        $board = array_fill(0, $rows, array_fill(0, $cols, 0));

        // Colocando minas aleatoriamente
        for ($i = 0; $i < $mines; $i++) {
            $x = rand(0, $rows - 1);
            $y = rand(0, $cols - 1);
            if ($board[$x][$y] == 0) {
                $board[$x][$y] = 'M';
            } else {
                $i--;
            }
        }

        $selectedCell = $request->input('cell');
        return view('minesweeper', compact('board', 'selectedCell'));
    }
} 