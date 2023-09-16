/* Original: https://southside.cc/assets/pre.js */

document.write('<!DOCTYPE html><html><head> <title>恨</title> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"> <link rel="shortcut icon" href="assets/favicon.png" type="image/png"></head><body> <div id="loading"><b class="loading">Loading...</b></div><div id="enter"><b class="enter">Click to enter</b></div><video id="video" src="./assets/bg.mp4"></video> <div class="dot"></div><audio id="audio"></audio> <div id="main"> <img class="logo" src="./assets/southside.gif"> <div class="header"> <b class="title"></b> <b class="info"></b> </div><div class="badges"> <div id="verified" class="tooltip"> <span class="tooltiptext">verified</span> <img class="tooltipitem" src="./assets/verified.gif"> </div><div id="booster" class="tooltip"> <span class="tooltiptext">booster</span> <img class="tooltipitem" src="./assets/boost.gif"> </div><div id="rich" class="tooltip"> <span class="tooltiptext">rich</span> <img class="tooltipitem" src="./assets/cash.gif"> </div><div id="king" class="tooltip"> <span class="tooltiptext">king</span> <img class="tooltipitem" src="./assets/crown.gif"> </div><div id="dev" class="tooltip"> <span class="tooltiptext">developer</span> <img class="tooltipitem" src="./assets/dev.png"> </div><div id="premium" class="tooltip"> <span class="tooltiptext">premium</span> <img class="tooltipitem" src="./assets/diamond.gif"> </div></div><div class="socials"> <a id="dc" target="_blank"> <img src="./assets/dc.svg"> </a> <a id="github" target="_blank"> <img src="./assets/github.svg"> </a> <a id="ig" target="_blank"> <img src="./assets/ig.svg"> </a> <a id="namemc" target="_blank"> <img src="./assets/namemc.svg"> </a> <a id="sc" target="_blank"> <img src="./assets/sc.svg"> </a> <a id="soundcloud" target="_blank"> <img src="./assets/soundcloud.svg"> </a> <a id="spotify" target="_blank"> <img src="./assets/spotify.svg"> </a> <a id="steam" target="_blank"> <img src="./assets/steam.svg"> </a> <a id="telegram" target="_blank"> <img src="./assets/telegram.svg"> </a> <a id="tiktok" target="_blank"> <img src="./assets/tiktok.svg"> </a> <a id="twitch" target="_blank"> <img src="./assets/twitch.svg"> </a> <a id="twitter" target="_blank"> <img src="./assets/twitter.svg"> </a> <a id="yt" target="_blank"> <img src="./assets/yt.svg"> </a> </div><input id="volume" type="range" min="0" max="100" step="0.1" value="0"> </div></body></html>');

const video = document.getElementById('video');
video.src = bg;

const audio = document.getElementById('audio');
audio.src = music;

const logo = document.querySelector('.logo');
logo.src = pfp;

const title = document.querySelector('.title');
title.textContent = header;

const info = document.querySelector('.info');
info.textContent = text;

const verified = document.getElementById('verified');
verified.style.display = verifiedbadge;

const booster = document.getElementById('booster');
booster.style.display = boosterbadge;

const rich = document.getElementById('rich');
rich.style.display = richbadge;

const king = document.getElementById('king');
king.style.display = crownbadge;

const dev = document.getElementById('dev');
dev.style.display = devbadge;

const premium = document.getElementById('premium');
premium.style.display = premiumbadge;

const dc = document.getElementById('dc');
dc.href = dclink;
dc.style.display = dcsocial;

const github = document.getElementById('github');
github.href = githublink;
github.style.display = githubsocial;

const ig = document.getElementById('ig');
ig.href = iglink;
ig.style.display = igsocial;

const namemc = document.getElementById('namemc');

namemc.href = namemclink;
namemc.style.display = namemcsocial;

const sc = document.getElementById('sc');
sc.href = sclink;
sc.style.display = scsocial;

const soundcloud = document.getElementById('soundcloud');
soundcloud.href = soundcloudlink;
soundcloud.style.display = soundcloudsocial;

const spotify = document.getElementById('spotify');
spotify.href = spotifylink;
spotify.style.display = spotifysocial;

const steam = document.getElementById('steam');
steam.href = steamlink;
steam.style.display = steamsocial;

const telegram = document.getElementById('telegram');
telegram.href = telegramlink;
telegram.style.display = telegramsocial;

const tiktok = document.getElementById('tiktok');
tiktok.href = tiktoklink;
tiktok.style.display = tiktoksocial;

const twitch = document.getElementById('twitch');
twitch.href = twitchlink;
twitch.style.display = twitchsocial;

const twitter = document.getElementById('twitter');
twitter.href = twitterlink;
twitter.style.display = twittersocial;

const yt = document.getElementById('yt');
yt.href = ytlink;
yt.style.display = ytsocial;
