import { 
  IonButton,
  IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
import SearchContainer from '../../components/SearchContainer';
import { FavoritesProvider } from '../../components/FavoritesContext';

const Feed: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
         <FavoritesProvider>
              <SearchContainer />
        
            </FavoritesProvider>
       
      </IonContent>
    </IonPage>
  );
};

export default Feed;