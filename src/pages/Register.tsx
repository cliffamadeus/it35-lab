import React, { useState } from 'react';
import {
    IonButton,
    IonContent,
    IonInput,
    IonInputPasswordToggle,
    IonPage,
    IonTitle,
    IonModal,
    IonText,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonToolbar,
} from '@ionic/react';
import { supabase } from '../utils/supabaseClient';
import bcrypt from 'bcryptjs';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleOpenVerificationModal = () => {

        if (!email.endsWith("@nbsc.edu.ph")) {
            alert("Only @nbsc.edu.ph emails are allowed to register.");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        setShowVerificationModal(true);
    };
   
    const doRegister = async () => {
        setShowVerificationModal(false);

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });
        if (error) {
            alert("Account creation failed: " + error.message);
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await supabase
            .from('users')
            .insert([{ 
                username, 
                user_email: email, 
                user_firstname: firstName, 
                user_lastname: lastName,
                user_password: hashedPassword
            }]);
        setShowSuccessModal(true);
    };
    {/*
    const doRegister = async () => {
        setShowVerificationModal(false);
        setShowSuccessModal(true);
    };
    */}
    return (
        <IonPage>
            <IonContent className='ion-padding'>
                <h1 style={{
                    marginTop:'15%',
                    }}>Create your account</h1>
                
                <IonInput style={{
                    marginTop:'15px',
                    }}
                    placeholder="Enter Firstname"
                    label="Last Firstname" 
                    labelPlacement="stacked" 
                    fill="outline" 
                    value={firstName} 
                    onIonChange={e => setFirstName(e.detail.value!)} />

                <IonInput style={{
                    marginTop:'15px',
                    }}
                    placeholder="Enter Lastname"
                    label="Last Name" 
                    labelPlacement="stacked" 
                    fill="outline" 
                    value={lastName} 
                    onIonChange={e => setLastName(e.detail.value!)} />

                <IonInput style={{
                    marginTop:'15px',
                    }}
                    placeholder="Enter your unique username"
                    label="Username" 
                    labelPlacement="stacked" 
                    fill="outline" 
                    value={username} 
                    onIonChange={e => setUsername(e.detail.value!)} />

                <IonInput style={{
                    marginTop:'15px',
                    }}
                     placeholder="youremail@nbsc.edu.ph"
                    label="Email" 
                    labelPlacement="stacked" 
                    fill="outline" 
                    type="email" 
                    value={email} 
                    onIonChange={e => setEmail(e.detail.value!)} />

                <IonInput style={{
                    marginTop:'15px',
                    }}
                    placeholder="Enter Password"
                    label="Password" 
                    labelPlacement="stacked" 
                    fill="outline" 
                    type="password" 
                    value={password} 
                    onIonChange={e => setPassword(e.detail.value!)}>
                    <IonInputPasswordToggle slot="end" />
                </IonInput>
                
                <IonInput style={{
                    marginTop:'15px',
                    }}
                    placeholder="Confirm Password"
                    label="Confirm Password" 
                    labelPlacement="stacked" 
                    fill="outline" 
                    type="password" 
                    value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)}>
                    <IonInputPasswordToggle slot="end" />
                </IonInput>

                <IonButton style={{
                    marginTop:'15px',
                    }}
                    onClick={handleOpenVerificationModal} 
                    expand="full" 
                    shape='round'>
                    Register
                </IonButton>

                <IonButton routerLink="/it35-lab" expand="full" fill="clear" shape='round'>
                  Already have an account? Signin
                </IonButton>


                <IonModal isOpen={showVerificationModal} onDidDismiss={() => setShowVerificationModal(false)}>
                    <IonToolbar color="primary"><IonTitle>Confirm Registration</IonTitle></IonToolbar>
                    <IonContent className="ion-padding">
                        <IonCard style={{
                            marginTop:'15%',
                            }}className="ion-padding" >
                            <IonCardHeader>
                                <IonCardTitle>User Registration Details</IonCardTitle>
                                <IonCardSubtitle style={{
                                    marginTop:'10%',
                                }}>
                                    Display Name</IonCardSubtitle>
                                <IonCardTitle>{firstName} {lastName}</IonCardTitle>
                                <IonCardTitle></IonCardTitle>
                                <IonCardSubtitle>Username</IonCardSubtitle>
                                <IonCardTitle>{username}</IonCardTitle>
                                <IonCardSubtitle>Email</IonCardSubtitle>
                                <IonCardTitle>{email}</IonCardTitle>
                            </IonCardHeader>

                            <div style={{
                                display:'flex',
                                justifyContent:'flex-end',
                                marginRight:'5px',
                            }}>
                                <IonButton fill="clear" onClick={() => setShowVerificationModal(false)} >Cancel</IonButton>
                                <IonButton className='ion-text-white' color="primary" onClick={doRegister}>Confirm</IonButton>
                            </div> 
                            
                        </IonCard>
                    </IonContent>
                </IonModal>

                <IonModal isOpen={showSuccessModal} onDidDismiss={() => setShowSuccessModal(false)}>
                    <IonContent className="ion-padding" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        textAlign: 'center',
                        marginTop:'35%'
                    }}>
                        <IonTitle style={{
                            marginTop:'40%'
                        }}>Registration Successful 🎉</IonTitle>
                        <IonText>
                            <p>Your account has been created successfully.</p>
                            <p>Please check your email address.</p>
                        </IonText>
                        <IonButton routerLink="/it35-lab" routerDirection="back" color="primary">
                            Go to Login
                        </IonButton>
                    </IonContent>
                </IonModal>

            </IonContent>
        </IonPage>
    );
};
export default Register;
