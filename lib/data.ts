import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import carhub from '@/public/carhub.png'
import cinemaura from "@/public/cinemaura.png";
import macos from "@/public/macos.png";
import textweet from "@/public/textweet.png";
import {BiHomeAlt2} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {GoProjectSymlink} from 'react-icons/go'
import {LiaToolsSolid} from 'react-icons/lia'
import {GiJourney, GiTalk} from 'react-icons/gi'
import {FaPython, FaReact, FaYarn} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import {TbBrandVscode, TbBrandNextjs} from 'react-icons/tb'
import {SiFlutter, SiHashnode, SiTypescript, SiRedux} from 'react-icons/si'
import {BsGithub, BsGit} from 'react-icons/bs'



export const links = [
  {
    hash: "#home",
    icon: React.createElement(BiHomeAlt2)
  },
  {
    hash: "#about",
    icon: React.createElement(CgProfile)
  },
  {
    hash: "#projects",
    icon: React.createElement(GoProjectSymlink)
  },
  {
    hash: "#skills",
    icon: React.createElement(LiaToolsSolid)
  },
  {
    hash: "#experience",
    icon: React.createElement(GiJourney)
  },
  {
    hash: "#contact",
    icon: React.createElement(GiTalk)
  },
] as const;

export const experiencesData = [
  {
    title: "INS Bootcamp",
    location: "Lonavla, Maharashtra",
    description:
      "I graduated after 6 months of studying. and immediately got hired as a Intern for Junior Data entry job.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2021",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "I worked as a front-end developer for 2 Months in my Local area company & also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2022",
  },
  {
    title: "Bachelor's of Computer Science",
    location: "Lonavla, Maharashtra",
    description:
      "I am currently in the process of completing my Bachelor's degree while concurrently pursuing freelance work as a developer as part of my side hustle ",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CinemAura",
    imageUrl: cinemaura,
    livePreview: "https://cinemaura.netlify.app/"
  },
  {
    title: "CarHub",
    imageUrl: carhub,
    livePreview: "https://car-showcase-delta-one.vercel.app/"
  },
  {
    title: "MacOS Clone",
    imageUrl: macos,
    livePreview: "https://healthydrugs.github.io/MacOS_system_M1/"
    },
  {
    title: "TextWeet",
    imageUrl: textweet,
    livePreview: "https://textweet-healthydrug-pw1lgjf1u-healthydrugs.vercel.app/"
    },
] as const;

export const skillsData = [
{
  icon: React.createElement(SiTypescript),
  hash: "#"
},
{
  icon: React.createElement(SiRedux),
  hash: "#"
},
{
  icon: React.createElement(TbBrandNextjs),
  hash: "#"
},
{
  icon: React.createElement(FaReact),
  hash: "#"
},
{
  icon: React.createElement(FaPython),
  hash: "#"
},
{
  icon: React.createElement(IoLogoJavascript),
  hash: "#"
},
{
  icon: React.createElement(TbBrandVscode),
  hash: "#"
},
{
  icon: React.createElement(BsGit),
  hash: "#"
},
{
  icon: React.createElement(SiFlutter),
  hash: "#"
},
{
  icon: React.createElement(FaYarn),
  hash: "#"
},
{
  icon: React.createElement(SiHashnode),
  hash: "#"
},
{
  icon: React.createElement(BsGithub),
  hash: "#"
},

] as const;
