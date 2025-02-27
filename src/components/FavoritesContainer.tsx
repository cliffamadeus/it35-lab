import { 
    IonList, 
    IonCard, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle, 
    IonCardContent, 
    IonButton, 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent
  } from "@ionic/react";
  import { useFavorites } from "./FavoritesContext"; // Import the context
  import feed from "./feedData.json";
  
  const FavoritesContainer: React.FC = () => {
    const { favorites } = useFavorites(); // Get favorites from context
    const favoriteArticles = feed.filter((article) => favorites.includes(article.id));
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Favorites</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          {favoriteArticles.length === 0 ? (
            <p style={{ textAlign: "center", padding: "20px" }}>No favorites added yet.</p>
          ) : (
            <IonList>
              {favoriteArticles.map((item) => (
                <IonCard key={item.id}>
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
            </IonList>
          )}
        </IonContent>
      </IonPage>
    );
  };
  
  export default FavoritesContainer;
  