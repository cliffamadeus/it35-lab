import { 
  IonButtons,
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
import FavoritesContainer from '../../components/FavoritesContainer';
import { FavoritesProvider } from '../../components/FavoritesContext';
import SearchContainer from '../../components/SearchContainer';

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
         <FavoritesProvider>
              <SearchContainer />
              <FavoritesContainer />
            </FavoritesProvider>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;