Dicee Challenge

This is a game on a single webpage. With every reload/ refresh of the page, the dice
on the page will "roll". Use this to find out who will pay the bill...

The skeleton of the webpage was already given(HTML and CSS). I had to add the behaviour of the dice.

Thought process:
First I needed random numbers for each dice/ player. This was basic code. Math.random().
Which I then Multiplied by 6 so the it would be between a number 0 and 6. Then I used the Math.Floor() function
to only get the whole number.

Then using if then else statements, if the number is x then change to the corrosponding image. It was important for the images to
have same number values. This way I could know which image would need to be selected.


I used DOM(Document object Model) to use Javascript in HTML. Which is a totally new concept for me.
document.querySelector(".img1").src = "image/dice1.png"

Initially I received a few errors: Type error. the problem was I didn't
specify the right element. Because I used querySelector I had to tell Javascript that I was refering to a
class in other words I had to put a full stop in front of the img1. If I were to use getElementById I wouldnt have needed any sort of
sign. Javascript would know that I wanted to get a Id'ed element.

After that it was smooth sailing.
