import React from "react";
import Main from "../assets/images/image-web-3-desktop.jpg";
import Mob from "../assets/images/image-web-3-mobile.jpg";
import pc from "../assets/images/image-retro-pcs.jpg"
import keyb from '../assets/images/image-top-laptops.jpg'
import game from "../assets/images/image-gaming-growth.jpg"

function main() {
  return (
    <>
    <div className="section">
      <div className="left">
        <div className="top">
          <img className="main_pic" src={Main} alt="" />
          <img className="pic" src={Mob} alt="" />
        </div>
        <div className="bottom">
          <div className="sec">
            <p className="bp"> The Bright Future of Web 3.0?</p>
          </div>
          <div className="sec">
            <p className="pp">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="btn">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="right">
        <h1 className="color">New</h1>
        <div className="title pb">
          <a href="" className="mt">Hydrogen VS Electric Cars</a>
          <p className="mp">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className="title pb">
          <a href="" className="mt">The Downsides of AI Artistry</a>
          <p className="mp">Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className="title">
          <a href="" className="mt">Is VC Funding Drying Up?</a>
          <p className="mp">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
    <div className="lsec">
    <div className="parts mr">
        <img src={pc} alt="" />
        <div className="sub">
            <p className="num">01</p>
            <a href="" className="tt">Reviving Retro PCs</a>
            <p className="pf">What happens when old PCs are given modern upgrades?</p>
        </div>
    </div>
    <div className="parts mr">
        <img src={keyb} alt="" />
        <div className="sub">
            <p className="num">02</p>
            <a href="" className="tt">Top 10 Laptops of 2022</a>
            <p className="pf">Our best picks for various needs and budgets.</p>
        </div>
    </div>
    <div className="parts">
        <img src={game} alt="" />
        <div className="sub">
            <p className="num">03</p>
            <a href="" className="tt">The Growth of Gaming</a>
            <p className="pf">How the pandemic has sparked fresh opportunities.</p>
        </div>
    </div>
    </div>
    </>
  );
}

export default main;
