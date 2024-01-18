import Header from "../components/header";
import PageTitle from "../components/page-title";
import AboutProfile from "../components/timeline/profile/about-profile";
import ProfileActions from "../components/timeline/profile/profile-actions";

function Profile(){
    return(
        <main className="timeline">
            <Header>
                <PageTitle value="Bradley Ortiz" />
            </Header>
            <AboutProfile />
            <ProfileActions />
        </main>
    )
}

export default Profile;