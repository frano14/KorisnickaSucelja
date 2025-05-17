export const PASSWORD_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f9fafb; color: #04494B; margin: 0; padding: 40px 0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); overflow: hidden;">
    <div style="background-color: #04494B; padding: 24px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px;">Lozinke uspješno dostavljena</h1>
    </div>

    <div style="padding: 24px;">
      <p>Pozdrav,</p>
      <p>Ova poruka potvrđuje da je vaša lozinka <span style="font-weight: bold;">{lozinka}</span>.</p>

      <div style="text-align: center; margin: 32px 0;">
        <div style="background-color: #10B981; color: white; width: 60px; height: 60px; line-height: 60px; border-radius: 50%; display: inline-block; font-size: 32px;">
          ✓
        </div>
      </div>

      <p>Ako vi niste inicirali ovu lozinku, odmah kontaktirajte naš tim za podršku.</p>

      <p>Radi sigurnosti pružamo sljedeće:</p>
      <ul style="padding-left: 20px;">
        <li>Korištenje jake i jedinstvene lozinke</li>
        <li>Omogućavanje dvofaktorske autentifikacije ako je dostupna</li>
      </ul>

      <p>Hvala što pomažete u zaštiti vašeg računa.</p>

      <p>S poštovanjem,<br>Vaš tim Solara</p>
    </div>

    <div style="text-align: center; padding: 16px; background-color: #f1f5f9; font-size: 12px; color: #6b7280;">
      <p>Ova poruka je automatski generirana. Molimo vas da ne odgovarate na nju.</p>
    </div>
  </div>
</body>
</html>
`;
