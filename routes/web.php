Route::get('/minesweeper', [MinesweeperController::class, 'index']);
Route::post('/minesweeper', [MinesweeperController::class, 'play']); 