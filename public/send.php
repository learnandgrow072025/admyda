 <?php
// public/send.php
header('Content-Type: application/json');

require __DIR__ . '/phpmailer/PHPMailer.php';
require __DIR__ . '/phpmailer/SMTP.php';
require __DIR__ . '/phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function json_fail($code, $msg) {
  http_response_code($code);
  echo json_encode(['ok' => false, 'error' => $msg]);
  exit;
}

try {
  // Read JSON body
  $input = json_decode(file_get_contents('php://input'), true);

  // Required fields
  $required = ['firstName','lastName','email','phone','serviceType','specificService'];
  foreach ($required as $k) {
    if (empty($input[$k])) json_fail(400, "Missing field: $k");
  }

  $first = trim($input['firstName']);
  $last  = trim($input['lastName']);
  $email = trim($input['email']);
  $phone = trim($input['phone']);
  $company = trim($input['company'] ?? '');
  $serviceType = trim($input['serviceType']);
  $specific = trim($input['specificService']);
  $message = trim($input['message'] ?? '');

  // === EDIT THESE 4 LINES FOR YOUR DOMAIN MAILBOX ===
  $smtpHost = 'smtpout.secureserver.net'; // GoDaddy SMTP
  $smtpUser = 'no-reply@YOURDOMAIN.com'; // your domain email
  $smtpPass = 'YOUR_EMAIL_PASSWORD';     // mailbox password
  $smtpPort = 587;                       // 465=SSL, 587=TLS

  $mail = new PHPMailer(true);
  // $mail->SMTPDebug = 2; // uncomment for server-side logs during troubleshooting

  $mail->isSMTP();
  $mail->Host = $smtpHost;
  $mail->SMTPAuth = true;
  $mail->Username = $smtpUser;
  $mail->Password = $smtpPass;
  $mail->Port = $smtpPort;
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // use ENCRYPTION_SMTPS for 465

  // Sender must be your domain
  $mail->setFrom($smtpUser, 'AdMyDa Website');
  // Recipients (both addresses you asked)
  $mail->addAddress('analytics@admyda.com');
  $mail->addAddress('admydaanalytics@gmail.com');
  // User’s address as Reply-To
  $mail->addReplyTo($email, "$first $last");

  $mail->isHTML(false);
  $mail->Subject = 'New Registration / Inquiry from Website';
  $mail->Body =
    "New Registration / Inquiry\n\n" .
    "Name: $first $last\n" .
    "Email: $email\n" .
    "Phone: $phone\n" .
    "Company: $company\n" .
    "Service Type: $serviceType\n" .
    "Specific: $specific\n\n" .
    "Message:\n$message\n\n" .
    "Submitted At: " . date('Y-m-d H:i:s');

  $mail->send();
  echo json_encode(['ok' => true]);
} catch (Exception $e) {
  // also log on server for support
  error_log('Mailer error: ' . $e->getMessage());
  json_fail(500, 'Email send failed: ' . $e->getMessage());
} catch (\Throwable $t) {
  error_log('Server error: ' . $t->getMessage());
  json_fail(500, 'Server error: ' . $t->getMessage());
}