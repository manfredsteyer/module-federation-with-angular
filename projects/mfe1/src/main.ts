//
// This workaround makes sure, we can execute
// this remote directly.
//
// It is needed to resolve all shared libs
// Once, they've been loaded via an dynamic import
// they can be referenced via a static one in
// the rest of the application.
//

import('./bootstrap');
