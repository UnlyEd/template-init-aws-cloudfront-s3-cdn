#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { StackProps } from 'aws-cdk-lib';
import 'source-map-support/register';
import { config } from '../config';
import { InitCdnStack } from '../lib/init-cdn-stack';

const app = new cdk.App();
const stackProps: StackProps = {
  stackName: config.stack.name,
  description: config.stack.description,
  env: {
    account: config.account,
    region: config.region,
  },
};

new InitCdnStack(app, 'CDNStack', stackProps);
