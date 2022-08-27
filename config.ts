export const config = {
  'stack': {
    'name': 'cdn',
    'description': 'CDN powered by AWS S3, AWS CloudFront, and AWS Route 53. Created by https://github.com/UnlyEd/template-init-aws-cloudfront-s3-cdn',
  },
  'route53': {
    'domainName': 'thabolebelo.com',
  },
  'customDomain': {
    'domainName': 'cdn.thabolebelo.com',
    'subjectAlternativeNames': '*.cdn.thabolebelo.com',
  },
  'account': '123456789012',
  'region': 'us-east-1',
};
