const mysql = require("mysql2/promise");
const { getConnection } = require("connection");
// Lambda function é o endpoint para listar alunos
exports.handler = async (event) => {
try {
const db = await getConnection();
const [rows] = await db.execute("SELECT * FROM Aluno");
return {
statusCode: 200,
headers: {
"Content-Type": "application/json",
"Access-Control-Allow-Origin": "*"
},
body: JSON.stringify(rows)
};
} catch (error) {
console.error(error);
return {
statusCode: 500,
headers: {
"Content-Type": "application/json",
"Access-Control-Allow-Origin": "*"
},
body: JSON.stringify({
error: "Erro ao consultar alunos"
})
};
}
};