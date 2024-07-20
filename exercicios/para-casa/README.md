# Exercício de Casa 🏠 

## Nome do Exercicio

- Explicação do exercício: 

<h2 align=center> Sistema de Gestão das Oficinas de Cultura </h2>

> 💡 As Oficinas Culturais são espaços mantidos pela Secretaria de Cultura do Estado e dedicados à promoção e à formação cultural. Elas oferecem uma variedade de atividades, incluindo cursos, workshops, palestras, exposições, apresentações artísticas, residências artísticas, entre outros. O objetivo principal das Oficinas Culturais é democratizar o acesso à cultura, fomentar o desenvolvimento artístico e cultural das comunidades locais e promover a troca de conhecimento entre artistas, produtores culturais e a população em geral.

Por problemas de gestão a Prefeitura de São Piraporinha do Sul decidiu fechar as Oficinas de Cultura, eles alegavam que tinham um sistema mas que ele estava todo por papel e que seria melhor fechar as Oficinas de Cultura do que criar um sistema digital. 
Sabendo disso a comunidade da {Reprograma} decidiu desenvolver o sistema de gestão das aulas das Oficinas de Cultura.

### Serviços que o sistema de gestão das Oficinas de Cultura deseja ter:

- Cadastro de Alunos e Professores: Registro de novos alunos e professores na plataforma.
- Matrícula em Cursos: Inscrição de alunos em cursos oferecidos pelas Oficinas de Cultura.
- Gestão de Cursos: Criação e edição de cursos, com detalhes como título e descrição.
- Registro de Presença: Marcação da presença dos alunos nas aulas dos cursos.

### Requisitos de negócio:

- Criar classes separadas para Aluno, Professor e Curso, incluindo os atributos mencionados no diagrama.
- Implementar métodos nas classes para registrar alunos e professores, matricular alunos em cursos, gerenciar cursos e registrar presença.
- Organizar a estrutura do projeto de forma apropriada, seguindo as melhores práticas para uma API RESTful.
- Aplicar a arquitetura Hexagonal
- Aplicar os princípios de design de código, como SOLID, DRY e KISS.
- Implementar padrões de design, como Factory e Observer.
- Escrever testes unitários básicos para garantir a funcionalidade do sistema.

### Diagrama:

```lua
+-------------------+
|       Pessoa      |
+-------------------+
| - id: string      |
| - nome: string    |
| - endereco: string|
| - telefone: string|
+-------------------+
        ^
        |
+-------+-------+
|               |
|    Professor  |
+---------------+
| - disciplinas: string[] |
+---------------+

+-----------------+
|      Aluno      |
+-----------------+
| - cursos: Curso[] |
+-----------------+
 
+----------------------+
|        Curso         |
+----------------------+
| - id: string         |
| - titulo: string     |
| - descricao: string  |
| - professores: Professor[] |
| - alunos: Aluno[]    |
+----------------------+
```
---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ ] Fiz o fork do repositório.
- [ ] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Criei minha branch (` git checkout -b nome-sobrenome `)
- [ ] Criei a pasta com o meu nome dentro da pasta entregas (` mkdir nome-sobrenome`)
- [ ] Resolvi o exercício dentro da minha pasta. Como no [exemplo](/on21-imersao-js-S1-TDD/exercicios/para-casa/entregas/exemplo-nome-sobrenome/).
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [ ] Criei um Pull Request seguindo as orientações que estao nesse [documento](/on21-imersao-js-S1-TDD/exercicios/para-casa/instrucoes-pull-request.md).
