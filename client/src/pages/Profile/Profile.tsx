import { useEffect, useState } from "react";

import "../../styles/profile.css";

import {
defaultProfile,
type ProfileData,
} from "../../constants/profile";

import ProfileHeader from "../../components/profile/ProfileHeader";

import ProfileCard from "../../components/profile/ProfileCard";

import AboutCard from "../../components/profile/AboutCard";

import SkillsCard from "../../components/profile/SkillsCard";

import ActivityCard from "../../components/profile/ActivityCard";

import StatsCard from "../../components/profile/StatsCard";

const STORAGE_KEY = "worksphere-profile";

const Profile = () => {

const [profile,setProfile] =
useState<ProfileData>(()=>{

const saved =
localStorage.getItem(STORAGE_KEY);

return saved
? JSON.parse(saved)
: defaultProfile;

});

useEffect(()=>{

localStorage.setItem(
STORAGE_KEY,
JSON.stringify(profile)
);

},[profile]);

return(

<div className="profile-page">

<ProfileHeader/>

<div className="profile-layout">

<div className="profile-left">

<ProfileCard
profile={profile}
/>

</div>

<div className="profile-right">

<AboutCard
profile={profile}
/>

<SkillsCard
profile={profile}
/>

</div>

</div>

<ActivityCard/>

<StatsCard
profile={profile}
/>

</div>

);

};

export default Profile;