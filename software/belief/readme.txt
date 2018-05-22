
#_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
#
#                       Belief Calculator
#                            ver. 0.6.4
#
#_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/


USAGE: 
---Calculation of `Truth Set'縲of a formula ---
Please input a `FORMULA' (written in TeX style) to the text field and press [Truths] button ,[ENTER] key or [Alt + ENTER] key.
If the computation procedure finishes successfully, a resultant vector appears on a terminal window.

Let i be a natural number starts from 1 (e.g., i=1, i=2, ...).
Syntax of PROPOSITION::= p_i
Syntax of AGENT::= a_i
Syntax of WORLD::= w_i

Syntax of FORMULA::=
PROPOSITION |
\chl{FROM_AGENT TO_AGENT} | //channel constant
\neg FORMULA | 
FORMULA \lor FORMULA |
FORMULA \land FORMULA |
FORMULA \to FORMULA | //implication
[PROGRAM_TERM] FORMULA | //Box operator
<PROGRAM_TERM> FORMULA | //Diamond operator

Syntax of PROGRAM_TERM::=
\rel{AGENT} | // This is atomic program term.
PROGRAM_TERM \cup PROGRAM_TERM | //non-deterministic choice
PROGRAM_TERM \; PROGRAM_TERM | //composition
\? PROGRAM_TERM | test
\cmf{FORMULA}{AGENT}{AGENT} //semi-private announcement

NOTE: You may use parenthesis, i.e., `(' and `)'.
Remark: The above syntax is based on TeX command. At the end of this document, we show TeX source which is not predefined in TeX environment, e.g., `\chl' and `\?'.

EXAMPLE: 
((p_1 \to p_2) \to p_1) \to p_1 [ENTER]
[\cmf{p_1}{a_1}{a_2}] p_1 [ENTER]

---Verification of `Frame properties' ---
Please input the following option to the text field (or leave empty) and press [Frame Property] button or [Alt + F] key.
If the function finishes successfully, a resultant list will be displayed in a terminal window.
In the list, if the given frame satisfies a frame property, 1 appears at the right side of the name of the property, otherwise, 0 appears.

OPTIONS::= AGENT | all 

EXAMPLE: 
[Frame Property] //verification of frame properties (with current agent id shown in the combobox next to matrix of relations)
a_1 [Frame Property] //verification of frame properties of agent a_1
all [Frame Property] //verification of frame properties (with all agents)

---Visualization of Kripke model---
Please input the following option to the text field (or leave empty) and press [Visualize] button or [Alt + V] key.
If the function finishes successfully, a visualized output appears on a window.

OPTIONS::= AGENT | WORLD | all

EXAMPLE: 
[Visualize] //visualization of current model (except channel)
a_1 [Visualize] //visualization of a model (with agent a_1)
w_1 [Visualize] //visualization of channel (at w_1 for every agent)

Note: You may choose `Graphviz'(default) or `Visual Editor' by Run > option > Visualization > Visualize button.
Note(Graphviz): Output `dot' files and `jpeg' files will be saved under `INSTALLED_DIR/dot' directory.
Note(Visual Editor): You can save screenshot by `SAVE' button, and output `png' file will be saved under `INSTALLED_DIR/save' directory.
Note(Visual Editor): If you want to edit Kripke frame by Visual Editor, please click the checkbox of `Add/del links', and click source and destination nodes.

---TeX command---
Here are TeX source which are not predefined in TeX:
\newcommand{\rel}[1]{\mathop{\mathsf{R}_{#1}}}
\newcommand{\chl}[1]{\mathsf{c}_{{#1}}}
\newcommand{\cmf}[3]{{[{#1}\!\!\downarrow^{#2}_{#3}]}}
\newcommand{\?}{?}
\renewcommand{\;}{;}

# Developer
Ryo Hatano, Tojo-lab, Japan Advanced Institute of Science and Technology
r-hatano@jaist.ac.jp