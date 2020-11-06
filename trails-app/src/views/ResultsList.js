import React, { Component } from "react";
import SearchResults from '../classes/SearchResults'
import ListItem from '../components/ListItem'
import Hike from '../classes/Hike';
import LinkButton from "../components/LinkButton";
import { useParams } from 'react-router-dom';



// Function is triggered when hike is clicked and id of hike is passed in
// TRIGGER RENDERING DETAIL VIEW HERE AND HIDE RESULTS LIST
function hikeClick(hikeID){
  console.log("clicked Hike: " + hikeID);
}

export default function ResultsList(props) {


  // currentSearch object from props which contains assembled list of hikes
  let {zip} = useParams();

  // TEMPORARY BUILDING OF RESULTS - This will need to happen during the search
  //props.searchObj.zip = 92037;
 
  props.searchObj.zip = "92037";
  //props.searchObj.lat = "32.715736";
  //props.searchObj.long ="-117.161";
  props.searchObj.translateZip();
  props.searchObj.getData();

  //for (var i = 1; i <= 10; i++){
  //  props.searchObj.results.push(new Hike(i, "Title "+ i, "This is the summary for Hike " + i, i, "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1078&q=80", i, i));
  //}

  return (

    // Build results list    
    // for each hike in currentSearch.results render ListItem
    <div className = 'results-list'>
    {props.searchObj.results.map(
      hike => (
        <LinkButton exact to={"/detail-view/" + hike.id}>
          <ListItem id = {hike.id} title = {hike.title} summary = {hike.summary} activityLevel = {hike.activityLevel} img = {hike.imgURL} distance = {hike.distance} temp = {hike.temp} clickFunction = {hikeClick}/>
        </LinkButton>
      )
    )}
    </div>

  );
}
