var rightconnection=false;
var datapoints1 = [];
jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
               
            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
         endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 5, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint);
        },

    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "images/littledot.png" } ],
        
        Connector: [ "Bezier", { curviness: -60 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("ld1"),
            e2 = prepare("ld2"),
            e3 = prepare("ld3"),
            e4 = prepare("ld4"),
            
            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });


        
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);


document.getElementById("check-button").addEventListener("click", function () {
        var correct_connections_1_3 = [
            {
                "source": "ld1",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld1"
            }
        ];

        var correct_connections_2_4= [
            {
                "source": "ld2",
                "target": "ld4"
            },
    
            {
                "source": "ld4",
                "target": "ld2"
            }
        ];
       


        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld4"
            },
    
            {
                "source": "ld4",
                "target": "ld2"
            },
          
            
         ];
         var actual_connections = instance.getAllConnections();

        var is_connected_1_3= false;
        var is_connected_2_4 = false;
        

        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_3){
                is_connected_1_3= correct_connections_1_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_2_4){
                is_connected_2_4 = correct_connections_2_4.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
       

        if ( is_connected_1_3&&is_connected_2_4&& !unallowed_connection_present) {
            alert("correct connection");
            rightconnection=true;
            document.getElementById("mcbb").disabled = false;
            document.getElementById("mcbb").classList.remove("disabled");
            return;
            }
        else if(!unallowed_connection_present){
                               alert("Please complete connection");
                               }
            else {
               alert("WRONG CONNECTION");
                return;
            } 
    });
});



var mcboffstate=true;
var were=240;
function mcbonoff()
{   

    if(rightconnection==false)
    {
        alert("Alert ! Please complete the connection first.");
    }
   else
    {
        if (mcboffstate==true)
        {       
            var text=document.getElementById("text_1");   
             mcboffstate=false;
        
        document.getElementById('select_1').disabled = false;
        document.getElementById('select_2').disabled = false;
        document.getElementById('select_3').disabled = false;
        document.getElementById('select_4').disabled = false;
        document.getElementById('select_5').disabled = false;
        document.getElementById('on').disabled = false;
        document.getElementById('mcbb').src="images/mcb2.png";
        document.getElementById('push1').src='images/push3.png';
        text.value="BALANCED";
        
         
    

          
     }  }     
}


function on()
{
   var text=document.getElementById("text_2");
  var image = document.getElementById('on');
  if (image.src.match("offimage")) {
    image.src = "images/onimage.png";
    text.value="INITIAL"
  } else {
    image.src = "images/offimage.jpg";
    text.value="FINAL"
  }

}


//Scripting of mcb ends
var op1= document.getElementById("select_1");

var op2 = document.getElementById("select_2");
var op3= document.getElementById("select_3");
var op4= document.getElementById("select_4");
var op5= document.getElementById("select_5");





var attcounter=1;
function addtotable()
        {
          if(op1.value==1&&op2.value==6&&op3.value==15&&op4.value==16&&op5.value==21 )
       {
           
           var currentVal1 = attcounter++;
  var currentVal2 = 100;
  var currentVal3 = 1;
  var currentVal4 = 100;
 

       
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
 
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
  
  document.getElementById("tb1").appendChild(tr);

}
else if(op1.value==2&&op2.value==8&&op3.value==14&&op4.value==19&&op5.value==21)
       {

        
           var currentVal1 = attcounter++;
  var currentVal2 = 984;
  var currentVal3 = 0.1;
  var currentVal4 = 98.4;
  
   
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
 
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
 
  document.getElementById("tb1").appendChild(tr);
}
else if(op1.value==3&&op2.value==6&&op3.value==11&&op4.value==16&&op5.value==25)
       {
           
           var currentVal1 = attcounter++;
  var currentVal2 = 10000;
  var currentVal3 = 0.01;
  var currentVal4 = 100;
 
  
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
 
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
 
  document.getElementById("tb1").appendChild(tr);

}
else if(op1.value==4&&op2.value==10&&op3.value==11&&op4.value==16&&op5.value==21)
       {
           
           var currentVal1 = attcounter++;
  var currentVal2 = 10;
  var currentVal3 = 10;
  var currentVal4 = 100;
  
  
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
 
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
 
  document.getElementById("tb1").appendChild(tr);
  
   
}
else if(op1.value==5&&op2.value==7&&op3.value==11&&op4.value==16&&op5.value==21)
       {
           
           var currentVal1 = attcounter++;
  var currentVal2 = 1;
  var currentVal3 = 100;
  var currentVal4 = 100;
  
  
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
 
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
 
  document.getElementById("tb1").appendChild(tr);
  
   
}

else
{
    
    
     document.getElementById('push').src = "images/push1.png";
                return;
    
}


}
function push()
        {
          if(op1.value==1&&op2.value==6&&op3.value==15&&op4.value==16&&op5.value==21 )
       {
       var text=document.getElementById("text_1");    
          
  rangeChange1()
  
  alert("BALANCED CONDITION");
   document.getElementById('push').src = "images/push2.png";
   text.value="BALANCED";

}
else if(op1.value==2&&op2.value==8&&op3.value==14&&op4.value==19&&op5.value==21)
       {

    var text=document.getElementById("text_1");        
  rangeChange1();
  alert("BALANCED CONDITION");
   document.getElementById('push').src = "images/push2.png";
   text.value="BALANCED";
}
else if(op1.value==3&&op2.value==6&&op3.value==11&&op4.value==16&&op5.value==25)
       {
           
       var text=document.getElementById("text_1");      
  rangeChange1();
alert("BALANCED CONDITION");
   document.getElementById('push').src = "images/push2.png";
   text.value="BALANCED";
}
else if(op1.value==4&&op2.value==10&&op3.value==11&&op4.value==16&&op5.value==21)
       {
           
    var text=document.getElementById("text_1");           
  rangeChange1();
   alert("BALANCED CONDITION");
   document.getElementById('push').src = "images/push2.png";
   text.value="BALANCED";
}
else if(op1.value==5&&op2.value==7&&op3.value==11&&op4.value==16&&op5.value==21)
       {
           
    var text=document.getElementById("text_1");           
  rangeChange4();
   alert("BALANCED CONDITION");
   document.getElementById('push').src = "images/push2.png";
   text.value="BALANCED";
}

else
{
    var text=document.getElementById("text_1");    
    rangeChange5();
     
     alert("UNBALANCED CONDITION");
     document.getElementById('push').src = "images/push1.png";
     text.value="UNBALANCED";
                return;
    
}


}

var e = document.getElementById("select_1");
var strUser = e.options[e.selectedIndex].value;
var value = 0;
e.onchange = function(){  
    value = this.value;
   
    if (this.value == 1) {
         var text=document.getElementById("text_1");   
    
        range901();
        rangeChange6();
         document.getElementById('push').src = "images/push1.png";
        text.value="UNBALANCED";
    }    
    if (this.value == 2) {
        var text=document.getElementById("text_1");   
        range902();
        rangeChange7();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }  
    if (this.value == 3) {
       
    var text=document.getElementById("text_1");   
        range903();
        rangeChange8();
         document.getElementById('push').src = "images/push1.png";
        text.value="UNBALANCED";
       
    }
    if (this.value == 4) {
       var text=document.getElementById("text_1");   
    
        range904();
        rangeChange9();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }
    if (this.value == 5) {
       
    
        range905();
        rangeChange9();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }
   
};
var i = document.getElementById("select_2");
var strUser = i.options[i.selectedIndex].value;
var value = 0;
i.onchange = function(){  
    value = this.value;
   
    if (this.value == 6) {
         
    var text=document.getElementById("text_1");   
        range906();
        rangeChange9();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED"; 
    }    
    if (this.value == 7) {
        var text=document.getElementById("text_1");   
        range907();
        rangeChange2();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }  
    if (this.value == 8) {
       
    var text=document.getElementById("text_1");   
        range908();
        rangeChange3();
         document.getElementById('push').src = "images/push1.png";
        text.value="UNBALANCED";
       
    }
    if (this.value == 9) {
       
    var text=document.getElementById("text_1");   
        range909();
        rangeChange4();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }
     if (this.value == 10) {
       var text=document.getElementById("text_1");   
    
        range910();
        rangeChange5();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }
   
};
var j = document.getElementById("select_3");
var strUser = j.options[j.selectedIndex].value;
var value = 0;
j.onchange = function(){  
    value = this.value;
   
    if (this.value == 11) {
         
    var text=document.getElementById("text_1");   
        range911();
        rangeChange4();
         document.getElementById('push').src = "images/push1.png";
        text.value="UNBALANCED";
    }    
    if (this.value == 12) {
        var text=document.getElementById("text_1");   
        range912();
        rangeChange5();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }  
    if (this.value == 13) {
       
    var text=document.getElementById("text_1");   
        range913();
        rangeChange6();
         document.getElementById('push').src = "images/push1.png";
        text.value="UNBALANCED";
       
    }
    if (this.value == 14) {
       var text=document.getElementById("text_1");   
    
        range914();
        rangeChange7();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }
     if (this.value == 15) {
       var text=document.getElementById("text_1");   
    
        range915();
        rangeChange8();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }
   
};

var k= document.getElementById("select_4");
var strUser = k.options[k.selectedIndex].value;
var value = 0;
k.onchange = function(){  
    value = this.value;
   
    if (this.value == 16) {
         
    var text=document.getElementById("text_1");   
        range916();
        rangeChange7();
         document.getElementById('push').src = "images/push1.png";
        text.value="UNBALANCED";
    }    
    if (this.value == 17) {
        var text=document.getElementById("text_1");   
        range917();
        rangeChange8();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }  
    if (this.value == 18) {
       
    var text=document.getElementById("text_1");   
        range918();
        rangeChange9();
         document.getElementById('push').src = "images/push1.png";
        text.value="UNBALANCED";
       
    }
    if (this.value == 19) {
       var text=document.getElementById("text_1");   
    
        range919();
        rangeChange2();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }
     if (this.value == 20) {
       var text=document.getElementById("text_1");   
    
        range920();
        rangeChange3();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }
   
};


var l = document.getElementById("select_5");
var strUser = l.options[l.selectedIndex].value;
var value = 0;
l.onchange = function(){  
    value = this.value;
   
    if (this.value == 21) {
         
    var text=document.getElementById("text_1");   
        range921();
        rangeChange2();
         document.getElementById('push').src = "images/push1.png";
        text.value="UNBALANCED";
    }    
    if (this.value == 22) {
        var text=document.getElementById("text_1");   
        range922();
        rangeChange3();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }  
    if (this.value == 23) {
       
    var text=document.getElementById("text_1");   
        range923();
        rangeChange4();
         document.getElementById('push').src = "images/push1.png";
        text.value="UNBALANCED";
       
    }
    if (this.value == 24) {
       var text=document.getElementById("text_1");   
    
        range924();
        rangeChange5();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }
     if (this.value == 25) {
       var text=document.getElementById("text_1");   
    
        range925();
        rangeChange6();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }
   
};



//Scryting of variation of bulbs begins


//Scripting of needle range begins
    var rangeClock1 =  document.querySelector('#needle1');
   
 function rangeChange1() {
        rangeClock1.style.transform = 'rotate(-2deg)';
       
    }
    function rangeChange2() {
      rangeClock1.style.transform = 'rotate(-23deg)';
      
       
  }
  function rangeChange3() {
    rangeClock1.style.transform = 'rotate(-17deg)';
   
  }
   function rangeChange4() {
    rangeClock1.style.transform = 'rotate(-11deg)';
   
  }
  function rangeChange5() {
    rangeClock1.style.transform = 'rotate(33deg)';
   
  }
   function rangeChange6() {
    rangeClock1.style.transform = 'rotate(23deg)';
   
  }
   function rangeChange7() {
    rangeClock1.style.transform = 'rotate(13deg)';
   
  }
   function rangeChange8() {
    rangeClock1.style.transform = 'rotate(19deg)';
   
  }
   function rangeChange9() {
    rangeClock1.style.transform = 'rotate(36deg)';
   
  }
  
  
//Scripting of needle range ends

var range90 =  document.querySelector('#knob1');
var range91 =  document.querySelector('#knob2');
var range92 =  document.querySelector('#knob3');
var range93 =  document.querySelector('#knob4');
var range94 =  document.querySelector('#knob5');

 function range901() {
        range90.style.transform = 'rotate(180deg)';
    
    }
    function range902() {
      range90.style.transform = 'rotate(120deg)'; 
      
  }
  function range903() {
    range90.style.transform = 'rotate(60deg)';
    
  }
   function range904() {
    range90.style.transform = 'rotate(245deg)';

  }
   function range905() {
        range90.style.transform = 'rotate(300deg)';
        
    }
     function range906() {
        
        range91.style.transform = 'rotate(60deg)';
        
    } function range907() {

        range91.style.transform = 'rotate(75deg)';
    
    } function range908() {
        
        range91.style.transform = 'rotate(120deg)';
        
    }
     function range909() {
        range91.style.transform = 'rotate(165deg)';
        
    }
     function range910() {
        
        range91.style.transform = 'rotate(240deg)';
        
    }
     function range911() {
    
        range92.style.transform = 'rotate(60deg)';
    }
     function range912() {
        
        range92.style.transform = 'rotate(90deg)';
    }
     function range913() {
    
        range92.style.transform = 'rotate(150deg)';
    }
     function range914() {
        
        range92.style.transform = 'rotate(180deg)';
    }
     function range915() {
    
        range92.style.transform = 'rotate(240deg)';
    }
      function range916() {
    
        range93.style.transform = 'rotate(60deg)';
    }
     function range917() {
        
        range93.style.transform = 'rotate(105deg)';
    }
     function range918() {
    
        range93.style.transform = 'rotate(165deg)';
    }
     function range919() {
        
        range93.style.transform = 'rotate(210deg)';
    }
     function range920() {
    
        range93.style.transform = 'rotate(240deg)';
    }
      function range921() {
    
        range94.style.transform = 'rotate(60deg)';
    }
     function range922() {
        
        range94.style.transform = 'rotate(90deg)';
    }
     function range923() {
    
        range94.style.transform = 'rotate(120deg)';
    }
     function range924() {
        
        range94.style.transform = 'rotate(150deg)';
    }
     function range925() {
    
        range94.style.transform = 'rotate(240deg)';
    }


