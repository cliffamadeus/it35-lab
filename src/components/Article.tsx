import { useParams } from 'react-router-dom';
import { 
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { useEffect, useState } from 'react';
import feed from './feed.json';
import { arrowBack } from 'ionicons/icons';

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    const foundArticle = feed.find(item => item.id.toString() === id);
    setArticle(foundArticle);
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot='start'>
          <IonButton routerLink="/it35-lab/app/home/feed">
              <IonIcon icon={arrowBack} slot="start" />
            </IonButton>
          </IonButtons>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        {article ? (
          <>
            <h2>{article.title}</h2>
            <p><strong>{article.author}</strong> - {article.date}</p>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <p>{article.content}</p>
            <p style={{
              textAlign: "justify",
              textJustify: "inter-word",
              lineHeight: 1.6
            }}>
              {article.details}
            </p>
          </>
        ) : (
          <p>Article not found.</p>
        )}
        
      </IonContent>
    </IonPage>
  );
};

export default Article;