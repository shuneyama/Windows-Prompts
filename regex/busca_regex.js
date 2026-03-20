const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const regexNome = /Anna/
const matchNome = banco.match(regexNome)
console.log(matchNome);

const regexTelefone = /\(\d+\)\s\d+-\d+/g
const matchTelefone = banco.match(regexTelefone)
console.log(matchTelefone);

const padraoTelefone = /\(\d{2}\)\s\d{5}-\d{4}/g
const matchPadraoTelefone = banco.match(padraoTelefone)
console.log(matchPadraoTelefone);

const padraoTelefone45 = /\(\d{2}\)\s\d{4,5}-\d{4}/g
const matchPadraoTelefone45 = banco.match(padraoTelefone45)
console.log(matchPadraoTelefone45);

const regexCPF = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g
const matchCPF = banco.match(regexCPF)
console.log(matchCPF);

const patternData = /\d{2}[./ ]?\d{2}[./ ]?\d{4}$/gm
const matchData = banco.match(patternData)
console.log(matchData);

const patternNomes = /^([A-Za-zÀ-ÿ]+)(\s[A-Za-zÀ-ÿ]+)+/gm
const matchNomes = banco.match(patternNomes)
console.log(matchNomes);


/*

.	Qualquer caractere, exceto quebras de linha.
*	Zero ou mais ocorrências do caractere ou grupo anterior.
+	Uma ou mais ocorrências do caractere ou grupo anterior.
?	Zero ou uma ocorrência do caractere ou grupo anterior.
|	Alternância, corresponde a um dos padrões à esquerda ou à direita.
()	Grupo de captura, agrupa caracteres para aplicar metacaracteres a eles.


[]	Classe de caracteres, corresponde a qualquer caractere dentro dos colchetes.
[a-z]	Qualquer letra minúscula de 'a' a 'z'	"a", "m", "z"
[0-9]	Qualquer dígito de 0 a 9	"0", "7", "9"
[A-Za-z]	Qualquer letra maiúscula ou minúscula	"A", "b", "Z"
[0-9A-Fa-f]	Qualquer caractere hexadecimal	"1", "A", "d"
[^0-9]	Qualquer caractere que não seja um dígito	"a", "B", "!"
[aeiou]	Qualquer vogal minúscula	"a", "e", "o"
[^aeiou]	Qualquer caractere que não seja uma vogal	"b", "z", "1"
[|?/’]	Caracteres literais	"|", "/", " ? ", “‘”
[^]	Classe de caracteres negada, corresponde a qualquer caractere que não esteja dentro dos colchetes.

^	ncora de início de linha, corresponde ao início de uma linha.
$	ncora de final de linha, corresponde ao final de uma linha.

\	Escape, permite escapar metacaracteres para correspondê-los literalmente.
\d	Qualquer dígito decimal	"0", "7", "9"
\D	Qualquer caractere que não seja um dígito	"a", "B", "!"
\w	Qualquer caractere alfanumérico	"A", "b", "0"
\W	Qualquer caractere que não seja alfanumérico	"!", "@", " "
\s	Qualquer caractere de espaço em branco	" ", "\t", "\n"
\S	Qualquer caractere que não seja espaço em branco	"a", "B", "9"

\[	Colchete de abertura [ literal	"["
\]	Colchete de fechamento ] literal	"]"
\.	Ponto . literal	"."
\+	Sinal de adição + literal	"+"
\\	Escape \ literal	""

{}	Quantificador de inteiros personalizado, especifica o número exato ou faixa de repetições.
    
*/