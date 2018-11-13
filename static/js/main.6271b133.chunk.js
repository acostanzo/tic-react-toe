(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(50)},16:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);n(16),n(18),n(20);var a=n(1),r=n(2),i=n(4),s=n(3),c=n(5),o=(n(22),n(24),n(0)),u=n.n(o),l=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.marker;return u.a.createElement("img",{alt:e,height:"100%",src:"/marker_".concat(e,".png"),width:"100%"})}}]),t}(o.Component),m=n(7),h=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"renderCell",value:function(e){var t=this,n=this.props.boardSpaces.get(e),a="calc(".concat(100/this.props.dimension,"% - 2px)");return u.a.createElement("div",{key:e,className:"game-cell",onClick:function(){return t.props.takeTurn(e)},style:{width:a,height:a}},u.a.createElement(m.CSSTransitionGroup,{className:"game-cell-marker",component:"div",transitionEnterTimeout:250,transitionLeaveTimeout:250,transitionName:"scale-transition"},n?u.a.createElement(l,{marker:n}):""))}},{key:"render",value:function(){var e=this,t=Array.from(this.props.boardSpaces.keys());return u.a.createElement("div",{className:"game-board tile-floating"},t.map(function(t){return e.renderCell(t)}))}}]),t}(o.Component),p=n(6);function v(e){for(var t=Object(p.a)(Array(e*e).keys()),n=[];t.length;)n.push(t.splice(0,e));return n}function f(e){for(var t=v(e),n=[],a=function(e){n.push(t.map(function(t){return t[e]}))},r=0;r<e;r++)a(r);return n}var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;return Object(p.a)(v(e)).concat(Object(p.a)(f(e)),Object(p.a)(function(e){var t=v(e),n=f(e),a=[];return a.push(t.reduce(function(e,t,a){return e.concat(t.filter(function(e){return n[a].indexOf(e)>=0}))},[])),a.push(t.reverse().reduce(function(e,t,a){return e.concat(t.filter(function(e){return n[a].indexOf(e)>=0}))},[])),a}(e)))},d=function(){function e(t){Object(a.a)(this,e),this.dimension=t.dimension,this.players=[{name:"Player 1",moves:[],marker:"X",wins:0},{name:"Player 2",moves:[],marker:"O",wins:0}],this.reset()}return Object(r.a)(e,[{key:"checkWinCondition",value:function(){var e=this.activePlayer.moves;return this.winningSets.some(function(t){return function(e,t){return t.every(function(t){return e.indexOf(t)>=0})}(e,t)})}},{key:"toggleActivePlayer",value:function(){this.activePlayer=this.activePlayer===this.players[0]?this.players[1]:this.players[0]}},{key:"takeTurn",value:function(e){var t=this.availableBoardSpaces.indexOf(e);t>=0&&(this.activePlayer.moves.push(e),this.availableBoardSpaces.splice(t,1),this.boardSpaces.set(e,this.activePlayer.marker),this.checkWinCondition()?this.endGame(this.activePlayer):this.availableBoardSpaces.length?this.toggleActivePlayer():this.endGame(!1))}},{key:"endGame",value:function(e){this.winner=e,this.gameOver=!0,e&&(this.winner.wins+=1)}},{key:"reset",value:function(){var e,t=(e=this.dimension,new Map(Object(p.a)(Array(e*e).keys()).map(function(e){return[e]}))),n=Array.from(t.keys()),a=y(this.dimension),r=this.players[0];Object.assign(this,{activePlayer:r,availableBoardSpaces:n,boardSpaces:t,gameOver:!1,winner:!1,winningSets:a}),this.players.forEach(function(e){return e.moves=[]})}}]),e}();n(42);var b=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.player,t=e.name,n=e.marker;return u.a.createElement("div",null,t,", it's your turn! Click an open space to drop an ",n," marker.")}}]),t}(o.Component),O=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"getWinMessage",value:function(){return"Congratulations ".concat(this.props.winner.name,', you won! Click "Reset Game" to play again.')}},{key:"getDrawMessage",value:function(){return'Good Game! It\'s a draw. Click the "Reset Game" button to play again.'}},{key:"render",value:function(){return u.a.createElement("div",null,this.props.winner?this.getWinMessage():this.getDrawMessage())}}]),t}(o.Component),g=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"getMessage",value:function(){return this.props.gameOver?u.a.createElement(O,{winner:this.props.winner}):u.a.createElement(b,{key:this.props.activePlayer.marker,player:this.props.activePlayer})}},{key:"render",value:function(){return u.a.createElement("div",{className:"message-center tile-floating"},u.a.createElement(m.CSSTransitionGroup,{component:"div",transitionEnterTimeout:250,transitionLeaveTimeout:250,transitionName:"message-center-transition"},this.getMessage()))}}]),t}(o.Component),k=(n(44),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"reset-button tile-floating"},u.a.createElement("button",{className:"pure-button",onClick:this.props.reset},"Reset Game"))}}]),t}(o.Component)),j=(n(46),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"scoreboard tile-floating"},u.a.createElement("h2",null,"Scoreboard"),u.a.createElement("table",{className:"pure-table"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Player"),u.a.createElement("th",null,"Marker"),u.a.createElement("th",null,"Wins"))),u.a.createElement("tbody",null,this.props.players.map(function(e,t){var n=e.name,a=e.marker,r=e.wins;return u.a.createElement("tr",{key:t},u.a.createElement("td",null,n),u.a.createElement("td",null,a),u.a.createElement("td",null,r))}))))}}]),t}(o.Component)),E=(n(48),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("header",{className:"title tile-floating"},u.a.createElement("h1",null,"Tic-React-Toe"))}}]),t}(o.Component)),w=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).game=new d({dimension:3}),e.state=e.getGameState(),e}return Object(c.a)(t,e),Object(r.a)(t,[{key:"takeTurn",value:function(e){this.game.gameOver||(this.game.takeTurn(e),this.syncStateWithGame())}},{key:"resetGame",value:function(){this.game.reset(),this.syncStateWithGame()}},{key:"getGameState",value:function(){return{activePlayer:this.game.activePlayer,boardSpaces:this.game.boardSpaces,gameOver:this.game.gameOver,players:this.game.players,winner:this.game.winner}}},{key:"syncStateWithGame",value:function(){this.setState(this.getGameState())}},{key:"conditionallyRenderResetButton",value:function(){var e=this,t=u.a.createElement(k,{reset:function(){return e.resetGame()}});return this.state.gameOver?t:""}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"app"},u.a.createElement("div",{className:"app-column"},u.a.createElement(E,null),u.a.createElement(g,{activePlayer:this.state.activePlayer,gameOver:this.state.gameOver,winner:this.state.winner}),u.a.createElement(h,{boardSpaces:this.state.boardSpaces,dimension:this.game.dimension,takeTurn:function(t){return e.takeTurn(t)}})),u.a.createElement("div",{className:"app-column"},u.a.createElement(j,{players:this.state.players}),u.a.createElement(m.CSSTransitionGroup,{component:"div",transitionEnterTimeout:250,transitionLeaveTimeout:250,transitionName:"scale-transition"},this.conditionallyRenderResetButton())))}}]),t}(o.Component),S=n(10);n.n(S).a.render(u.a.createElement(w,null),document.getElementById("root"))}},[[15,2,1]]]);
//# sourceMappingURL=main.6271b133.chunk.js.map