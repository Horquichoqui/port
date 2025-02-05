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
    <form method="post">
        <table>
            <?php
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

            // Renderizando o tabuleiro
            for ($i = 0; $i < $rows; $i++) {
                echo "<tr>";
                for ($j = 0; $j < $cols; $j++) {
                    echo "<td>";
                    if (isset($_POST['cell']) && $_POST['cell'] == "$i-$j") {
                        echo $board[$i][$j] == 'M' ? '??' : $board[$i][$j];
                    } else {
                        echo "<button type='submit' name='cell' value='$i-$j'>?</button>";
                    }
                    echo "</td>";
                }
                echo "</tr>";
            }
            ?>
        </table>
    </form>
</body>
</html> 