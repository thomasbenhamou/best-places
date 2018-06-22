#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>

#import "RCCManager.h"

#import <React/RCTRootView.h>
@import GoogleMaps;

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
  [GMSServices provideAPIKey:@"AIzaSyDKeuZzaXdHRXgXnyGyTTq_qu_DA425NN4"];
#ifdef DEBUG
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  self.window.backgroundColor = [UIColor whiteColor];
  [[RCCManager sharedInstance] initBridgeWithBundleURL:jsCodeLocation launchOptions:launchOptions];
  return YES;
}

@end

// /**
//  * Copyright (c) 2015-present, Facebook, Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */

// #import "AppDelegate.h"

// #import <React/RCTBundleURLProvider.h>
// #import <React/RCTRootView.h>
// @import GoogleMaps;

// @implementation AppDelegate

// - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
// {
//   [GMSServices provideAPIKey:@"AIzaSyDKeuZzaXdHRXgXnyGyTTq_qu_DA425NN4"];
//   NSURL *jsCodeLocation;

//   #ifdef DEBUG
//   jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
//   #else
//   jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
//   #endif
//   jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];


//   RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
//                                                       moduleName:@"bestplaces"
//                                                initialProperties:nil
//                                                    launchOptions:launchOptions];
//   rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

//   self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
//   UIViewController *rootViewController = [UIViewController new];
//   rootViewController.view = rootView;
//   self.window.rootViewController = rootViewController;
//   [self.window makeKeyAndVisible];
//   return YES;
// }

// @end
