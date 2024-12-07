function getSelectedValue() {
	const apple = document.querySelector(".apple");
	const hono = document.querySelector(".hono");
    const vivo = document.querySelector(".vivo");
	const redmi = document.querySelector(".redmi");
	const oppo = document.querySelector(".oppo");
	const moto = document.querySelector(".moto");
	const realme = document.querySelector(".realme");
	const value = document.getElementById("list").value;

	const displayapple = value === "apple" || value === "all" ? "block" : "none";
    console.log(displayapple,"apple")
	const displayhono = value === "hono" || value === "all" ? "block" : "none";
    console.log(displayhono,"honor")

	const displayvivo= value === "vivo" || value === "all" ? "block" : "none";
    console.log(displayvivo,"vivo")
    const displayredmi = value === "redmi" || value === "all" ? "block" : "none";
    console.log(displayredmi,"redmi")
    const displayoppo = value === "oppo" || value === "all" ? "block" : "none";
    const displayrealme = value === "realme" || value === "all" ? "block" : "none";
    const displaymoto = value === "moto" || value === "all" ? "block" : "none";

	apple.style.display = displayapple;
	hono.style.display = displayhono;
    vivo.style.display = displayvivo;
    redmi.style.display = displayredmi;
    realme.style.display = displayrealme;
    oppo.style.display = displayoppo;
    moto.style.display = displaymoto;


  }

 

    $('input[type="checkbox"]').click(function() {
        var $checked = $('input[type="checkbox"]:checked');
        var $productItem = $('.productItem');
        var filters = [];
        var productFilter = '';
        console.log(filters)
        
        if ($checked.length > 0) {
            $productItem.hide();
            
            $checked.each(function() {
               dataType = $(this).attr('data-type');
               if (!filters[dataType]) filters[dataType] = [];  
               filters[dataType].push(this.value);
            });
    
            for(var filterType in filters) { 
                for (i in filters[filterType]) {
                    productFilter += '[data-'+filterType+'="'+filters[filterType][i]+'"],';
                }
                productFilter = productFilter.replace(/,$/,'');
                console.log(productFilter)
            }
            $productItem
                .filter(productFilter)
                .map(function() {
                     $(this).show();
                 });
        } else {
            $productItem.show();
        }
    });



    $('.moreless-button').click(function() {
      $('.moretext').slideToggle();
      if ($('.moreless-button').text() == "Show more") {
        $(this).text("-Show More")
      } else {
        $(this).text("+Show More")
      }
    });
    $('.moreless-buttons').click(function() {
      $('.moretexts').slideToggle();
      if ($('.moreless-buttons').text() == "Show more") {
        $(this).text("-Show More")
      } else {
        $(this).text("+Show More")
      }
    });
    $('.moreless-buttone').click(function() {
      $('.moretexte').slideToggle();
      if ($('.moreless-buttone').text() == "Show more") {
        $(this).text("-Show More")
      } else {
        $(this).text("+Show More")
      }
    });

    $('.moreless-buttonlap').click(function() {
      $('.morelap').slideToggle();
      if ($('.moreless-buttonlap').text() == "Show more") {
        $(this).text("-Show More")
      } else {
        $(this).text("+Show More")
      }
    });

    $('.moreless-buttonlapram').click(function() {
      $('.morelapram').slideToggle();
      if ($('.moreless-buttonlapram').text() == "Show more") {
        $(this).text("-Show More")
      } else {
        $(this).text("+Show More")
      }
    });
    
    $('.moreless-buttonlapstore').click(function() {
      $('.morelapstore').slideToggle();
      if ($('.moreless-buttonlapstore').text() == "Show more") {
        $(this).text("-Show More")
      } else {
        $(this).text("+Show More")
      }
    });

    $('.moreless-buttonlappro').click(function() {
      $('.morelappro').slideToggle();
      if ($('.moreless-buttonlappro').text() == "Show more") {
        $(this).text("-Show More")
      } else {
        $(this).text("+Show More")
      }
    });


    $('.moreless-buttontab').click(function() {
      $('.moretab').slideToggle();
      if ($('.moreless-buttonlap').text() == "Show more") {
        $(this).text("-Show More")
      } else {
        $(this).text("+Show More")
      }
    });

    $('.moreless-buttontabram').click(function() {
      $('.moretabram').slideToggle();
      if ($('.moreless-buttontabram').text() == "Show more") {
        $(this).text("-Show More")
      } else {
        $(this).text("+Show More")
      }
    });
    
    $('.moreless-buttontabstore').click(function() {
      $('.moretabstore').slideToggle();
      if ($('.moreless-buttontabstore').text() == "Show more") {
        $(this).text("-Show More")
      } else {
        $(this).text("+Show More")
      }
    });

// jQuery(document).ready(function($){
//     $(".show-more-btn").click(function(e){
//       $(".show-more-item:hidden").slice(0,3).fadeIn();
//       if ($(".show-more-item:hidden").length < 1) $(this).fadeOut();
//     })
//   })


 function uncheck(){
    var inputs = document.getElementsByTagName('input');
    for (var i=0; i<inputs.length; i++)  {
        if (inputs[i].type == 'checkbox')   {
            inputs[i].checked = false;
        }
        }
 }


 $(document).ready(function() {
    $('.showAll').click(function() {
        $('.productItem').show();
    });
});



// Get a reference to the filter buttons and all items
const filterButtons = document.querySelectorAll('.filter-button');
const items = document.querySelectorAll('.items');

// Add an event listener to each filter button
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the selected category from the button's data-category attribute
    const selectedCategory = button.dataset.category;

    // Loop through each item and check if it matches the selected category
    items.forEach((item) => {
      if (selectedCategory === 'all') {
        item.classList.remove('hides');
      } else if (item.dataset.category === selectedCategory) {
        item.classList.remove('hides');
      } else {
        item.classList.add('hides');
      }
    });
  });
});


var $btns = $('.filterhm').click(function() {
  // console.log("jhvgvgv")
  if (this.id == 'all') {
    $('#parent > div').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#parent > div').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
}) 

$(document).ready(function() {
  $('.showtv').click(function() {
      $('.smarttv').show();
      $('.air').hide();
      $('.homeappl').hide();
  });
});

$(document).ready(function() {
  $('.homeapp').click(function() {
    $('.homeappl').show();
      $('.air').hide();
      $('.smarttv').hide();
  });
});

$(document).ready(function() {
  $('.showac').click(function() {
      $('.air').show();
      $('.smarttv').hide();
  });
});
$(document).ready(function() {
  $('.homeall').click(function() {
      $('.air').hide();
      $('.smarttv').hide();
      $('.productItem').show();
      // $('.smarttv').hide();
  });
});


$(document).ready(function() {
  $('.accessall').click(function() {
      $('.speaker').hide();
      $('.productItem').show();
      $('.watchs').hide();
      $('.gamings').hide();
      $('.computers').hide();
  });
});

$(document).ready(function() {
  $('.showspeak').click(function() {
      $('.speaker').show();
      $('.watchs').hide();
      $('.gamings').hide();
      $('.computers').hide();
  });
});

$(document).ready(function() {
  $('.mobacc').click(function() {
      $('.speaker').hide();
      $('.watchs').hide();
      $('.gamings').hide();
      $('.computers').hide();
  });
});
$(document).ready(function() {
  $('.compacc').click(function() {
      $('.speaker').hide();
      $('.watchs').hide();
      $('.gamings').hide();
      $('.computers').show();
  });
});
$(document).ready(function() {
  $('.airpods').click(function() {
      $('.speaker').hide();
      $('.watchs').hide();
      $('.gamings').hide();
      $('.computers').hide();
  });
});
$(document).ready(function() {
  $('.gamingacc').click(function() {
      $('.speaker').hide();
      $('.watchs').hide();
      $('.gamings').show();
      $('.computers').hide();
  });
});

$(document).ready(function() {
  $('.smartwatch').click(function() {
      $('.speaker').hide();
      $('.watchs').show();
      $('.gamings').hide();
      $('.computers').hide();
  });
});

$(document).ready(function(){
  $(".india1").click(function(){
      $(".uae").hide();
    $(".india").show();
  });
  $(".uae1").click(function(){
      $(".uae").show();
    $(".india").hide();
  });
});