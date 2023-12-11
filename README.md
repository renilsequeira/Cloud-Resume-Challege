# Cloud-Resume-Challege

# Project Achievements 🚀

## 1. Resume Creation with HTML 📄
Crafted a professional resume using HTML, leveraging a user-friendly Bootstrap template for a sleek and modern design.

## 2. Styling with CSS 🎨
Implemented custom styles in CSS to enhance the visual appeal of the resume, specifically focusing on showcasing certificates effectively and integrating a dynamic visitor counter seamlessly.

## 3. AWS S3 Deployment 🌐
Successfully deployed the resume as a static website on AWS S3, utilizing a well-configured S3 bucket as the primary origin and enhancing performance through CloudFront distribution.

## 4. Security Measures with AWS CloudFront 🔒
Ensured secure access by configuring the S3 bucket for CloudFront distribution, implementing Origin Access Control (OAC) to restrict public access solely through CloudFront. Activated Block Public Access and disabled static website features for optimal compatibility with OAC.

## 5. HTTPS Implementation 🔐
Implemented HTTPS with AWS CloudFront, enforcing SSL/TLS protocols and redirecting all HTTP requests to the secure HTTPS version. Employed AWS-issued SSL certificates and optimized security headers for added protection.

## 6. Custom Domain Setup with AWS Route 53 🌐
Secured a custom domain through AWS Route 53 and established a CNAME record linking the domain to the CloudFront distribution, providing a professional and branded web presence.

## 7. Visitor Counter Integration with JavaScript 📊
Incorporated a dynamic visitor counter into the website using JavaScript. Upon loading, a GET request is sent to an API to fetch the latest page views count, offering visitors real-time interaction with the growing popularity of the site.

## 8. DynamoDB for Visitor Counter Storage 💾
Implemented a robust AWS DynamoDB solution to store the visitor count, utilizing a well-architected table with a single record and attribute. This scalable solution ensures efficient data storage and retrieval.

## 9. Lambda-Backed API for DynamoDB Interaction 🚀
Established a REST API as the secondary origin for the CloudFront distribution, enhancing security by avoiding direct communication with DynamoDB. This API is invoked via CloudFront, triggering a Lambda function that updates the counter in DynamoDB, ensuring seamless and secure communication.
