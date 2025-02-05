<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Campo Minado</title>
    <style>
        table {
            border-collapse: collapse;
        }
        td {
            width: 30px;
            height: 30px;
            text-align: center;
            border: 1px solid #000;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Jogo de Campo Minado</h1>
    <form method="post" action="{{ url('/minesweeper') }}">
        @csrf
        <table>
            @for ($i = 0; $i < 5; $i++)
                <tr>
                    @for ($j = 0; $j < 5; $j++)
                        <td>
                            @if (isset($selectedCell) && $selectedCell == "$i-$j")
                                {{ $board[$i][$j] == 'M' ? '??' : $board[$i][$j] }}
                            @else
                                <button type="submit" name="cell" value="{{ $i }}-{{ $j }}">?</button>
                            @endif
                        </td>
                    @endfor
                </tr>
            @endfor
        </table>
    </form>
</body>
</html> 