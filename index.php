<?php
    exec("lessc less/index.less css/index.css");
    echo file_get_contents("index.htm");