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
import feed from './feedData.json';

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
        {feed.map((item,index)=>(

          <IonCard key={index}>
            <IonCardHeader>
              <IonCardSubtitle>{item.author}, {item.date}</IonCardSubtitle>
              <IonCardTitle>{item.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{item.description}</IonCardContent>
            <IonButton fill="clear" routerLink={`/it35-lab/app/home/feed/article/${item.id}`}>
              See Details
            </IonButton>
          </IonCard>
        ))}
        
      </IonContent>
    </IonPage>
  );
};

export default Feed;