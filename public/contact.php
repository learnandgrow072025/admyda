<?php
// public/contact.php
header('Content-Type: application/json');

try {
  // Read JSON body
  $input = json_decode(file_get_contents('php://input'), true);

  // Basic sanitization
  $first = trim($input['firstName'] ?? '');
  $last  = trim($input['lastName'] ?? '');
  $email = trim($input['email'] ?? '');
  $phone = trim($input['phone'] ?? '');
  $company = trim($input['company'] ?? '');
  $serviceType = trim($input['serviceType'] ?? '');
  $specificService = trim($input['specificService'] ?? '');
  $message = trim($input['message'] ?? '');

  if (!$first || !$last || !$email || !$phone || !$serviceType || !$specificService) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
    exit;
  }

  // Compose email
  $to = 'analytics@admyda.com, admydaanalytics@gmail.com'; // send to both
  $subject = 'New Registration / Inquiry from Website';
  $body = "New Registration/Inquiry:\n\n"
        . "Name: $first $last\n"
        . "Email: $email\n"
        . "Phone: $phone\n"
        . "Company: $company\n"
        . "Service Type: $serviceType\n"
        . "Specific: $specificService\n"
        . "Message:\n$message\n\n"
        . "Submitted At: " . date('Y-m-d H:i:s');

  // IMPORTANT on shared hosting: From should be your domain
  $headers = [];
  $headers[] = 'From: AdMyDa Website <no-reply@' . $_SERVER['HTTP_HOST'] . '>';
  $headers[] = 'Reply-To: ' . $email;
  $headers[] = 'Content-Type: text/plain; charset=UTF-8';

  $sent = @mail($to, $subject, $body, implode("\r\n", $headers));

  if ($sent) {
    echo json_encode(['ok' => true]);
  } else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'mail() failed on server']);
  }
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => $e->getMessage()]);
}