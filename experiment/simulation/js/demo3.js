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
        endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgb(255, 0, 0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare1 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint1);
        },
        endpoint2 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgb(255, 0, 0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare2 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint2);
        },
        endpoint3 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgb(255, 0, 0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare3 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint3);
        },
        endpoint4 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgb(255, 0, 0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare4 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint4);
        },
        endpoint5 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare5 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint5);
        },
        endpoint6 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "green" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare6 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint6);
        },
        endpoint7 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgb(128, 0, 255)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare7 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint7);
        },
        endpoint8 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgba(255,247,94)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare8 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint8);
        },
         endpoint9 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgba(255,247,94)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare9 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint8);
        },
         endpoint10 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "rgba(255,192,203) " },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare10 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint8);
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
        
        Connector: [ "Bezier", { curviness: -70 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("ld1"),
            e2 = prepare2("ld2"),
            e3 = prepare3("ld3"),
            e4 = prepare4("ld4"),
            e5 = prepare5("ld5"),
            e6 = prepare6("ld6"),
            e7 = prepare7("ld7"),
            e8 = prepare8("ld8"),
            e9 = prepare8("ld9"),
            e10 = prepare8("ld10"),
           
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

        var correct_connections_2_4 = [
            {
                "source": "ld2",
                "target": "ld4"
            },
    
            {
                "source": "ld4",
                "target": "ld2"
            }
        ];
        var correct_connections_5_6 = [
            {
                "source": "ld5",
                "target": "ld6"
            },
    
            {
                "source": "ld6",
                "target": "ld5"
            }
        ];
         var correct_connections_7_8 = [
            {
                "source": "ld7",
                "target": "ld8"
            },
    
            {
                "source": "ld8",
                "target": "ld7"
            }
        ];
         var correct_connections_8_9 = [
            {
                "source": "ld8",
                "target": "ld9"
            },
    
            {
                "source": "ld9",
                "target": "ld8"
            }
        ];
         var correct_connections_10_5 = [
            {
                "source": "ld10",
                "target": "ld5"
            },
    
            {
                "source": "ld5",
                "target": "ld10"
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
            {
                "source": "ld5",
                "target": "ld6"
            },
    
            {
                "source": "ld6",
                "target": "ld5"
            },
             {
                "source": "ld7",
                "target": "ld8"
            },
             {
                "source": "ld8",
                "target": "ld7"
            },
             {
                "source": "ld8",
                "target": "ld9"
            },
             {
                "source": "ld9",
                "target": "ld8"
            },
            {
                "source": "ld10",
                "target": "ld5"
            },
            {
                "source": "ld5",
                "target": "ld10"
            },
            
             
         ];
         var actual_connections = instance.getAllConnections();

        var is_connected_1_3= false;
        var is_connected_2_4 = false;
        var is_connected_5_6 = false;
        var is_connected_7_8 = false;
        var is_connected_8_9 = false;
        var is_connected_10_5 = false;
       

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
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_5_6){
                is_connected_5_6 = correct_connections_5_6 .find(function (conn) {
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

            if(!is_connected_7_8){
                is_connected_7_8 = correct_connections_7_8 .find(function (conn) {
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

            if(!is_connected_8_9){
                is_connected_8_9 = correct_connections_8_9 .find(function (conn) {
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

            if(!is_connected_10_5){
                is_connected_10_5 = correct_connections_10_5 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
       

        if ( is_connected_1_3&&is_connected_2_4&&is_connected_5_6&&is_connected_7_8&&is_connected_8_9&&is_connected_10_5&& !unallowed_connection_present) {
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


//Scripting of mcb begins

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
        document.getElementById('mcbb').src="images/mcb2.png";
        text.value="BALANCED";
        
         
    

          
     }  }     
}

//Scripting of mcb ends
var op1= document.getElementById("select_1");

var op2 = document.getElementById("select_2");

var op3 = document.getElementById("select_3");


var attcounter=1;
function addtotable()
        {
           
          if(op1.value==2&&op2.value==7&&op3.value==12 )
       {
           
           var currentVal1 = attcounter++;
  var currentVal2 = 0.1;
  var currentVal3 = 0.432;
  var currentVal4 = 0.0432;
 var currentVal5 = 0.0248;


       
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
 
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
  td5.innerHTML=currentVal5;
  
  document.getElementById("tb1").appendChild(tr);

}
else if(op1.value==3&&op2.value==8&&op3.value==13 )
       {

        
           var currentVal1 = attcounter++;
   var currentVal2 = 1;
  var currentVal3 = 0.0442;
  var currentVal4 = 0.0442;
   var currentVal5 = 0.0227;
  
  
   
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
 
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
  td5.innerHTML=currentVal5;
 
  document.getElementById("tb1").appendChild(tr);
}
else if(op1.value==4&&op2.value==9&&op3.value==14 )
       {
           
           var currentVal1 = attcounter++;
 var currentVal2 = 10;
  var currentVal3 = 0.0045;
  var currentVal4 = 0.045;
 var currentVal4 = 0.0425;
  
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
 
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
  td5.innerHTML=currentVal5;
 
  document.getElementById("tb1").appendChild(tr);

}
else if(op1.value==5&&op2.value==10&&op3.value==15)
       {
           
           var currentVal1 = attcounter++;
   var currentVal2 = 100;
  var currentVal3 = 0.0005;
  var currentVal4 = 0.05;
  var currentVal5 = 0.0495;
  
  
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
 
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
  td5.innerHTML=currentVal5;
 
  document.getElementById("tb1").appendChild(tr);
  
   
}

else
{
    
    
     document.getElementById('push').src = "images/push2.png";
                return;
    
}


}
function push()
        {
          if(op1.value==2&&op2.value==7&&op3.value==12 )
       {
       var text=document.getElementById("text_1");    
          
  rangeChange1()
  
  alert("BALANCED CONDITION");
   document.getElementById('push').src = "images/push2.png";
   text.value="BALANCED";

}
else if(op1.value==3&&op2.value==8&&op3.value==13 )
       {

    var text=document.getElementById("text_1");        
  rangeChange2();
  alert("BALANCED CONDITION");
   document.getElementById('push').src = "images/push2.png";
   text.value="BALANCED";
}
else if(op1.value==4&&op2.value==9&&op3.value==14 )
       {
           
       var text=document.getElementById("text_1");      
  rangeChange3();
alert("BALANCED CONDITION");
   document.getElementById('push').src = "images/push2.png";
   text.value="BALANCED";
}
else if(op1.value==5&&op2.value==10&&op3.value==15)
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
        rangeChange6();
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
        rangeChange6();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED"; 
    }    
    if (this.value == 7) {
        var text=document.getElementById("text_1");   
        range907();
        rangeChange6();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }  
    if (this.value == 8) {
       
    var text=document.getElementById("text_1");   
        range908();
        rangeChange6();
         document.getElementById('push').src = "images/push1.png";
        text.value="UNBALANCED";
       
    }
    if (this.value == 9) {
       
    var text=document.getElementById("text_1");   
        range909();
        rangeChange6();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }
     if (this.value == 10) {
       var text=document.getElementById("text_1");   
    
        range910();
        rangeChange6();
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
        rangeChange6();
         document.getElementById('push').src = "images/push1.png";
        text.value="UNBALANCED";
    }    
    if (this.value == 12) {
        var text=document.getElementById("text_1");   
        range912();
        rangeChange6();
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
        rangeChange6();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }
     if (this.value == 15) {
       var text=document.getElementById("text_1");   
    
        range915();
        rangeChange6();
         document.getElementById('push').src = "images/push1.png";
       text.value="UNBALANCED";
    }
   
};


//Scryting of variation of bulbs begins


//Scripting of needle range begins
    var rangeClock1 =  document.querySelector('#needle1');
     var rangeClock2 =  document.querySelector('#needle2');
   
 function rangeChange1() {
        rangeClock1.style.transform = 'rotate(-2deg)';
         rangeClock2.style.transform = 'rotate(33deg)';
       
    }
    function rangeChange2() {
      rangeClock1.style.transform = 'rotate(-2deg)';
      rangeClock2.style.transform = 'rotate(43deg)';
       
      
       
  }
  function rangeChange3() {
    rangeClock1.style.transform = 'rotate(-2deg)';
    rangeClock2.style.transform = 'rotate(21deg)';
       
   
  }
   function rangeChange4() {
    rangeClock1.style.transform = 'rotate(-2deg)';
   rangeClock2.style.transform = 'rotate(6deg)';
       
  }
  function rangeChange5() {
    rangeClock1.style.transform = 'rotate(33deg)';
    rangeClock2.style.transform = 'rotate(13deg)';
       
   
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

 function range901() {
        range90.style.transform = 'rotate(60deg)';
    
    }
    function range902() {
      range90.style.transform = 'rotate(120deg)'; 
      
  }
  function range903() {
    range90.style.transform = 'rotate(180deg)';
    
  }
   function range904() {
    range90.style.transform = 'rotate(245deg)';

  }
   function range905() {
        range90.style.transform = 'rotate(300deg)';
        
    }
     function range906() {
        
        range91.style.transform = 'rotate(150deg)';
        
    } function range907() {

        range91.style.transform = 'rotate(180deg)';
    
    } function range908() {
        
        range91.style.transform = 'rotate(210deg)';
        
    }
     function range909() {
        range91.style.transform = 'rotate(240deg)';
        
    }
     function range910() {
        
        range91.style.transform = 'rotate(270deg)';
        
    }
     function range911() {
    
        range92.style.transform = 'rotate(120deg)';
    }
     function range912() {
        
        range92.style.transform = 'rotate(150deg)';
    }
     function range913() {
    
        range92.style.transform = 'rotate(180deg)';
    }
     function range914() {
        
        range92.style.transform = 'rotate(210deg)';
    }
     function range915() {
    
        range92.style.transform = 'rotate(240deg)';
    }
