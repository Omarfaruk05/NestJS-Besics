'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">besics documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-22c6a57263ace5093efde23861520078ac66a641215d8687d4ecd7a86d47e59fb46ac3bf85b65981f7c6c532fc9deb9296cf1db7059d0116cffab0b963e70cfd"' : 'data-bs-target="#xs-controllers-links-module-AppModule-22c6a57263ace5093efde23861520078ac66a641215d8687d4ecd7a86d47e59fb46ac3bf85b65981f7c6c532fc9deb9296cf1db7059d0116cffab0b963e70cfd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-22c6a57263ace5093efde23861520078ac66a641215d8687d4ecd7a86d47e59fb46ac3bf85b65981f7c6c532fc9deb9296cf1db7059d0116cffab0b963e70cfd"' :
                                            'id="xs-controllers-links-module-AppModule-22c6a57263ace5093efde23861520078ac66a641215d8687d4ecd7a86d47e59fb46ac3bf85b65981f7c6c532fc9deb9296cf1db7059d0116cffab0b963e70cfd"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-22c6a57263ace5093efde23861520078ac66a641215d8687d4ecd7a86d47e59fb46ac3bf85b65981f7c6c532fc9deb9296cf1db7059d0116cffab0b963e70cfd"' : 'data-bs-target="#xs-injectables-links-module-AppModule-22c6a57263ace5093efde23861520078ac66a641215d8687d4ecd7a86d47e59fb46ac3bf85b65981f7c6c532fc9deb9296cf1db7059d0116cffab0b963e70cfd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-22c6a57263ace5093efde23861520078ac66a641215d8687d4ecd7a86d47e59fb46ac3bf85b65981f7c6c532fc9deb9296cf1db7059d0116cffab0b963e70cfd"' :
                                        'id="xs-injectables-links-module-AppModule-22c6a57263ace5093efde23861520078ac66a641215d8687d4ecd7a86d47e59fb46ac3bf85b65981f7c6c532fc9deb9296cf1db7059d0116cffab0b963e70cfd"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabaseModule-3ec8cf4c7e9c0b576566c3bbe647cd18d2acd609d22e007397635be236c312e9f320af6afb2d05dbcef04a8c54376153b4d5c25f051733346873bf9657f68db5"' : 'data-bs-target="#xs-injectables-links-module-DatabaseModule-3ec8cf4c7e9c0b576566c3bbe647cd18d2acd609d22e007397635be236c312e9f320af6afb2d05dbcef04a8c54376153b4d5c25f051733346873bf9657f68db5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-3ec8cf4c7e9c0b576566c3bbe647cd18d2acd609d22e007397635be236c312e9f320af6afb2d05dbcef04a8c54376153b4d5c25f051733346873bf9657f68db5"' :
                                        'id="xs-injectables-links-module-DatabaseModule-3ec8cf4c7e9c0b576566c3bbe647cd18d2acd609d22e007397635be236c312e9f320af6afb2d05dbcef04a8c54376153b4d5c25f051733346873bf9657f68db5"' }>
                                        <li class="link">
                                            <a href="injectables/DatabaseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabaseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmployeesModule.html" data-type="entity-link" >EmployeesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-EmployeesModule-d0498ca5e12779c3c1c9b08f758ed7a390d484043a7c118d3434631e169faf35550ba20e9f91affd591757cc24c20f228b4f0e7011e02d3f6d1a8092e5648008"' : 'data-bs-target="#xs-controllers-links-module-EmployeesModule-d0498ca5e12779c3c1c9b08f758ed7a390d484043a7c118d3434631e169faf35550ba20e9f91affd591757cc24c20f228b4f0e7011e02d3f6d1a8092e5648008"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EmployeesModule-d0498ca5e12779c3c1c9b08f758ed7a390d484043a7c118d3434631e169faf35550ba20e9f91affd591757cc24c20f228b4f0e7011e02d3f6d1a8092e5648008"' :
                                            'id="xs-controllers-links-module-EmployeesModule-d0498ca5e12779c3c1c9b08f758ed7a390d484043a7c118d3434631e169faf35550ba20e9f91affd591757cc24c20f228b4f0e7011e02d3f6d1a8092e5648008"' }>
                                            <li class="link">
                                                <a href="controllers/EmployeesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployeesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EmployeesModule-d0498ca5e12779c3c1c9b08f758ed7a390d484043a7c118d3434631e169faf35550ba20e9f91affd591757cc24c20f228b4f0e7011e02d3f6d1a8092e5648008"' : 'data-bs-target="#xs-injectables-links-module-EmployeesModule-d0498ca5e12779c3c1c9b08f758ed7a390d484043a7c118d3434631e169faf35550ba20e9f91affd591757cc24c20f228b4f0e7011e02d3f6d1a8092e5648008"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmployeesModule-d0498ca5e12779c3c1c9b08f758ed7a390d484043a7c118d3434631e169faf35550ba20e9f91affd591757cc24c20f228b4f0e7011e02d3f6d1a8092e5648008"' :
                                        'id="xs-injectables-links-module-EmployeesModule-d0498ca5e12779c3c1c9b08f758ed7a390d484043a7c118d3434631e169faf35550ba20e9f91affd591757cc24c20f228b4f0e7011e02d3f6d1a8092e5648008"' }>
                                        <li class="link">
                                            <a href="injectables/EmployeesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployeesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-84f3bed0b1b85da75ce2807147460b4b0172414a65d04aaff3641c4b88bb77c15cf79438897f221ea09345191a063bdcc15506638a0168d6fd61fc90c1a3081b"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-84f3bed0b1b85da75ce2807147460b4b0172414a65d04aaff3641c4b88bb77c15cf79438897f221ea09345191a063bdcc15506638a0168d6fd61fc90c1a3081b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-84f3bed0b1b85da75ce2807147460b4b0172414a65d04aaff3641c4b88bb77c15cf79438897f221ea09345191a063bdcc15506638a0168d6fd61fc90c1a3081b"' :
                                            'id="xs-controllers-links-module-PostsModule-84f3bed0b1b85da75ce2807147460b4b0172414a65d04aaff3641c4b88bb77c15cf79438897f221ea09345191a063bdcc15506638a0168d6fd61fc90c1a3081b"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-84f3bed0b1b85da75ce2807147460b4b0172414a65d04aaff3641c4b88bb77c15cf79438897f221ea09345191a063bdcc15506638a0168d6fd61fc90c1a3081b"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-84f3bed0b1b85da75ce2807147460b4b0172414a65d04aaff3641c4b88bb77c15cf79438897f221ea09345191a063bdcc15506638a0168d6fd61fc90c1a3081b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-84f3bed0b1b85da75ce2807147460b4b0172414a65d04aaff3641c4b88bb77c15cf79438897f221ea09345191a063bdcc15506638a0168d6fd61fc90c1a3081b"' :
                                        'id="xs-injectables-links-module-PostsModule-84f3bed0b1b85da75ce2807147460b4b0172414a65d04aaff3641c4b88bb77c15cf79438897f221ea09345191a063bdcc15506638a0168d6fd61fc90c1a3081b"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-dbe0170d8d8bde84177baf690586347df6227423ca2f401c66a40eb166b35ffff3561294a92e90f5a44f9a3ee4a6ba90195158b876c9645aa9da31614fa601e5"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-dbe0170d8d8bde84177baf690586347df6227423ca2f401c66a40eb166b35ffff3561294a92e90f5a44f9a3ee4a6ba90195158b876c9645aa9da31614fa601e5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-dbe0170d8d8bde84177baf690586347df6227423ca2f401c66a40eb166b35ffff3561294a92e90f5a44f9a3ee4a6ba90195158b876c9645aa9da31614fa601e5"' :
                                            'id="xs-controllers-links-module-UsersModule-dbe0170d8d8bde84177baf690586347df6227423ca2f401c66a40eb166b35ffff3561294a92e90f5a44f9a3ee4a6ba90195158b876c9645aa9da31614fa601e5"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-dbe0170d8d8bde84177baf690586347df6227423ca2f401c66a40eb166b35ffff3561294a92e90f5a44f9a3ee4a6ba90195158b876c9645aa9da31614fa601e5"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-dbe0170d8d8bde84177baf690586347df6227423ca2f401c66a40eb166b35ffff3561294a92e90f5a44f9a3ee4a6ba90195158b876c9645aa9da31614fa601e5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-dbe0170d8d8bde84177baf690586347df6227423ca2f401c66a40eb166b35ffff3561294a92e90f5a44f9a3ee4a6ba90195158b876c9645aa9da31614fa601e5"' :
                                        'id="xs-injectables-links-module-UsersModule-dbe0170d8d8bde84177baf690586347df6227423ca2f401c66a40eb166b35ffff3561294a92e90f5a44f9a3ee4a6ba90195158b876c9645aa9da31614fa601e5"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EmployeesController.html" data-type="entity-link" >EmployeesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostsDto.html" data-type="entity-link" >UpdatePostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseService.html" data-type="entity-link" >DatabaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmployeesService.html" data-type="entity-link" >EmployeesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});