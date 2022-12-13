import React, { useEffect, useState } from "react"
import { fetchApiData } from "../helper/fetchApiData"
import DisplaySortedRepoData from "./DisplaySortedRepoData"
import myData from '../../Assets/data.json';
export function GetRepoData() {
  return (
    <DisplaySortedRepoData
      data={myData}
    />
  )
};