import { useEffect, useState } from "react";
import CoverBanner from "../../components/profile/CoverBanner";
import EditProfileModal from "../../components/profile/EditProfileModal";
import AddSkillModal from "../../components/profile/AddSkillModal";
import ProfileToast from "../../components/profile/ProfileToast";
import SocialLinks from "../../components/profile/SocialLinks";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileCard from "../../components/profile/ProfileCard";
import AboutCard from "../../components/profile/AboutCard";
import SkillsCard from "../../components/profile/SkillsCard";
import ActivityCard from "../../components/profile/ActivityCard";
import StatsCard from "../../components/profile/StatsCard";
import ResumeCard from "../../components/profile/ResumeCard";
import ProfileCompletion from "../../components/profile/ProfileCompletion";

import "../../styles/profile.css";

import {
  defaultProfile,
  type ProfileData,
} from "../../constants/profile";

const STORAGE_KEY = "worksphere-profile";

const Profile = () => {
  const [toast, setToast] = useState("");
  const [isEditingSkills, setIsEditingSkills] =
  useState(false);

  const [isEditOpen, setIsEditOpen] =
    useState(false);

  const [isSkillOpen, setIsSkillOpen] =
    useState(false);

  const [editingSkill, setEditingSkill] =
    useState<string | null>(null);

  const [profile, setProfile] =
    useState<ProfileData>(() => {
      const saved =
        localStorage.getItem(STORAGE_KEY);

      return saved
        ? JSON.parse(saved)
        : defaultProfile;
    });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(profile)
    );
  }, [profile]);

  //----------------------------------
  // Save Profile
  //----------------------------------

  const handleSaveProfile = (
    updatedProfile: ProfileData
  ) => {
    setProfile(updatedProfile);

    setToast(
      "Profile updated successfully!"
    );

    setTimeout(() => {
      setToast("");
    }, 3000);
  };

  //----------------------------------
  // Add Skill
  //----------------------------------

  const handleAddSkill = (
    skill: string
  ) => {
    if (!skill.trim()) return;

    if (
      profile.skills.some(
        (s) =>
          s.toLowerCase() ===
          skill.toLowerCase()
      )
    ) {
      setToast("Skill already exists!");

      setTimeout(() => {
        setToast("");
      }, 3000);

      return;
    }

    setProfile({
      ...profile,
      skills: [
        ...profile.skills,
        skill,
      ],
    });

    setToast(
      "Skill added successfully!"
    );

    setTimeout(() => {
      setToast("");
    }, 3000);
  };

  //----------------------------------
  // Delete Skill
  //----------------------------------

  const handleDeleteSkill = (
    skill: string
  ) => {
    setProfile({
      ...profile,
      skills:
        profile.skills.filter(
          (s) => s !== skill
        ),
    });

    setToast("Skill removed.");

    setTimeout(() => {
      setToast("");
    }, 3000);
  };

  //----------------------------------
  // Edit Skill
  //----------------------------------

  const handleEditSkill = (
    oldSkill: string,
    newSkill: string
  ) => {
    if (!newSkill.trim()) return;

    setProfile({
      ...profile,
      skills:
        profile.skills.map((s) =>
          s === oldSkill
            ? newSkill
            : s
        ),
    });

    setToast(
      "Skill updated successfully!"
    );

    setTimeout(() => {
      setToast("");
    }, 3000);
  };

  const handleResumeUpload = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    setProfile({
      ...profile,
      resume: reader.result as string,
    });

    setToast("Resume uploaded!");

    setTimeout(() => {
      setToast("");
    }, 3000);
  };

  reader.readAsDataURL(file);
};

const handleRemoveResume = () => {
  setProfile({
    ...profile,
    resume: null,
  });

  setToast("Resume removed!");

  setTimeout(() => {
    setToast("");
  }, 3000);
};

  return (
    <div className="profile-page">
      <ProfileHeader />

<CoverBanner profile={profile} />

      <div className="profile-layout">

        <div className="profile-left">

  <ProfileCard
    profile={profile}
    onEdit={() => setIsEditOpen(true)}
  />

  <SocialLinks
    profile={profile}
  />
  <ResumeCard
  profile={profile}
  onUploadResume={handleResumeUpload}
  onRemoveResume={handleRemoveResume}
/>

<ProfileCompletion
  profile={profile}
/>

</div>
        

        <div className="profile-right">

          <AboutCard
            profile={profile}
          />
<SkillsCard
  profile={profile}
  isEditing={isEditingSkills}
  onToggleEdit={() =>
    setIsEditingSkills(!isEditingSkills)
  }
  onAddSkill={() => {
    setEditingSkill(null);
    setIsSkillOpen(true);
  }}
  onDeleteSkill={handleDeleteSkill}
  onEditSkill={(skill) => {
    setEditingSkill(skill);
    setIsSkillOpen(true);
  }}
/>

        </div>

      </div>

      <ActivityCard />

      <StatsCard
        profile={profile}
      />

      <EditProfileModal
        isOpen={isEditOpen}
        onClose={() =>
          setIsEditOpen(false)
        }
        profile={profile}
        onSave={handleSaveProfile}
      />

      <AddSkillModal
        isOpen={isSkillOpen}
        onClose={() =>
          setIsSkillOpen(false)
        }
        editingSkill={editingSkill}
        onSave={handleAddSkill}
        onEdit={handleEditSkill}
      />

      <ProfileToast
        message={toast}
      />
    </div>
  );
};

export default Profile;