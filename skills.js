var image = document.getElementById("image");
var liquid = document.getElementById("liquid");

image.addEventListener('mouseover', normal);
image.addEventListener('mouseleave', swirly);

function normal() 
{
  TweenMax.to('#liquid', 1, { attr: {
                                       scale: 0
                                    }
                             });
}

function swirly() 
{
  TweenMax.to('#liquid', 1, { attr: {
                                       scale: 300
                                    }
                            });
}