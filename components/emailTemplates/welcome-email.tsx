import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const WelcomeEmail: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, // "there" in Swedish, used when name is not available
}) => {

    return (
        <div style={{ 
          fontFamily: 'Arial, sans-serif',
          maxWidth: '600px',
          margin: '0 auto',
          padding: '0',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          color: '#333',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          {/* Header */}
          <div style={{
            backgroundColor: '#005293', // Swedish blue
            padding: '30px 20px',
            borderRadius: '10px 10px 0 0',
            textAlign: 'center'
          }}>
            <img 
              src="https://i.imgur.com/2kxHH4A.png" 
              alt="QuickFeed Logo" 
              style={{ height: '40px', marginBottom: '15px' }}
            />
            <h1 style={{ 
              color: '#FECC02', // Swedish yellow
              fontSize: '28px',
              textAlign: 'center',
              margin: 0,
              fontWeight: '700',
              letterSpacing: '0.5px'
            }}>
              Välkommen till QuickFeed!
            </h1>
          </div>
          
          {/* Main Content */}
          <div style={{ 
            padding: '30px',
            backgroundColor: '#f9f9f9',
            borderRadius: '0 0 10px 10px'
          }}>
            {/* Greeting */}
            <p style={{ 
              fontSize: '18px', 
              lineHeight: '1.5', 
              fontWeight: 'bold',
              color: '#005293'
            }}>
              Hej {firstName}!
            </p>
            
            {/* Welcome Message */}
            <div style={{ marginBottom: '25px' }}>
              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
                Tack för att du går med i vår väntelista! Vi är glada att du visar intresse för QuickFeed.
              </p>
              
              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
                Vi arbetar hårt för att skapa den bästa möjliga matupplevelsen för dig. Du kommer att vara bland de första som får veta när vi lanserar.
              </p>
              
              <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Under tiden, följ gärna våra sociala medier för att hålla dig uppdaterad om våra senaste nyheter och utveckling.
              </p>
            </div>
    
            {/* Social Media Links */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '15px',
              margin: '25px 0'
            }}>
              <a href="https://facebook.com" style={{ textDecoration: 'none' }}>
                <div style={{ 
                  backgroundColor: '#3b5998', 
                  color: 'white',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>f</div>
              </a>
              <a href="https://instagram.com" style={{ textDecoration: 'none' }}>
                <div style={{ 
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  color: 'white',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>i</div>
              </a>
              <a href="https://twitter.com" style={{ textDecoration: 'none' }}>
                <div style={{ 
                  backgroundColor: '#1DA1F2',
                  color: 'white',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>t</div>
              </a>
            </div>
            
            {/* Quote */}
            <div style={{ 
              margin: '30px 0',
              padding: '20px',
              borderLeft: '4px solid #FECC02',
              backgroundColor: '#f0f7ff',
              borderRadius: '0 8px 8px 0'
            }}>
              <p style={{ margin: '0', fontStyle: 'italic', color: '#444' }}>
                "Bra mat börjar med bra ingredienser, och bra service börjar med engagerade människor."
              </p>
            </div>
            
            {/* Contact */}
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '25px' }}>
              Har du frågor? Svara bara på detta mail så hjälper vi dig.
            </p>
            
            {/* Unsubscribe Button */}
            <div style={{ textAlign: 'center', margin: '30px 0' }}>
              <a 
                href="https://quickfeed.example.com/unsubscribe?email={email}" 
                style={{
                  backgroundColor: '#f5f5f5',
                  color: '#666',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  border: '1px solid #ddd',
                  display: 'inline-block'
                }}
              >
                Ta bort mig från väntelistan
              </a>
            </div>
            
            {/* Signature */}
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.6', 
              marginTop: '30px',
              borderTop: '1px solid #eaeaea',
              paddingTop: '20px'
            }}>
              Med vänliga hälsningar,<br />
              <span style={{ color: '#005293', fontWeight: 'bold' }}>QuickFeed-teamet</span>
            </p>
          </div>
          
          {/* Footer */}
          <div style={{
            backgroundColor: '#f0f0f0',
            padding: '15px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#777',
            borderRadius: '0 0 10px 10px',
            borderTop: '1px solid #eaeaea'
          }}>
            <p style={{ margin: '0 0 5px' }}>© {new Date().getFullYear()} QuickFeed. Alla rättigheter förbehållna.</p>
            <p style={{ margin: '0' }}>Du får detta e-postmeddelande eftersom du registrerade dig för vår väntelista.</p>
          </div>
        </div>
      );
    };
    
    export default WelcomeEmail;