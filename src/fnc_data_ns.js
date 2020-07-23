// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa
// 2014/6/29 Modified by nkeronkow

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';

var bln_ResultMode = 1;
var int_ResultImg = 2;
var int_ResultRank = 3;

// Display style for the result page
var bln_ResultStyle = 0;

// Progress bar completion
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 42;

// Number of column spans
var int_Colspan = 3;

var ary_TitleData = [
    "Prologue - Evil Time Part 1",
    "Episode 1 - Evil Time Part 2",
    "Episode 2 - Separated Hearts",
    "Episode 3 - Singing Shock",
    "Episode 4 - Burning Run",
    "Episode 5 - Necessary",
    "Episode 6 - Partial Necrosis"
];

var ary_StageData = [
    "★",
    "★★",
    "★★★",
    "★★★★",
    "★★★★★",
    "★★★★★★"
];

// Define an entry in this tuple for each character
// The array in third position is for title data
// The array in fifth position is for star data
var ary_CharacterData = [

// Robots                0 1 2 3 4 5 6
[1, "Castle-3",         [1,1,0,1,1,1,1], "Castle-3.png",            [1,0,0,0,0,0]],
[1, "Lancet-2",         [1,1,0,1,1,1,1], "Lancet-2.png",            [1,0,0,0,0,0]],
[1, "Thermal-EX",       [1,1,0,1,1,1,1], "Thermal-EX.png",          [1,0,0,0,0,0]],

];
