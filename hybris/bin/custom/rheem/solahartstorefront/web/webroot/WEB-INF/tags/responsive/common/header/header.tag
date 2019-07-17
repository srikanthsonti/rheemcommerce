<%@ tag body-content="empty" trimDirectiveWhitespaces="true"%>
<%@ attribute name="hideHeaderLinks" required="false"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="cms" uri="http://hybris.com/tld/cmstags"%>
<%@ taglib prefix="ycommerce" uri="http://hybris.com/tld/ycommercetags"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<%@ taglib prefix="nav" tagdir="/WEB-INF/tags/responsive/nav"%>

<spring:htmlEscape defaultHtmlEscape="true" />

<cms:pageSlot position="TopHeaderSlot" var="component" element="div" >
	<cms:component component="${component}" />
</cms:pageSlot>



<div id="wrapper" class="home-page no-hero">

	<div id="header-v2">
		<header>
			<div class="page-contai>ner">
				<div class="head-wrapper">
					<div class="head-logo">
						<a href="/" class="print-no"><img src="${commonResourcePath}/solahartstorefront/content/images/svg/solahart-logo.svg" alt="Solahart - Home"
								title="Solahart - Home"></a>
						<img src="${commonResourcePath}/solahartstorefront/content/images/svg/solahart-logo-000.svg" alt="Solahart - Home" title="Solahart - Home"
							class="print-only">
					</div>
					<div class="dealer-chooser ">
						<div class="dealer-chooser-content">
							<a href="#" class="find">Find Local Dealer</a>
							<div class="post-code">
								<input id="dealer-postcode-input" type="tel" class="not-uniform form-control dealer-postcode-input"
									name="dealer-postcode-input" placeholder="Enter postcode">
								<button type="button" id="dealer-postcode-submit" class="dealer-postcode-submit"></button>
							</div>
						</div>

					</div>
					<div class="burger"><a href="#"><span></span></a></div>
					<div class="lnks">
						<a href="tel:1300 721 984" class="call-us"><span>1300 721 984</span></a>
						<a href="javascript:void(0);" class="free-quote"
							onclick="$('body').toggleClass('show-popup-quote')"><span>Get a free quote</span></a>
					</div>
				</div>
			</div>
		</header>
	</div>


	<!-- 
	============================
	CAROUSEL
	============================ 
	-->

	<!-- 
	============================
	END CAROUSEL
	============================ 
	-->






	<!-- 
	============================
	SUB NAV 2
	============================ 
	-->
	<nav id="sub-nav-v2" class="">
		<div class="stickybit">
			<div class="page-container">
				<ul class="sub-nav">
					<li class="dealer-chooser ">
						<div class="dealer-chooser-content">
							<a href="#" class="find">Find Local Dealer</a>
							<div class="post-code">
								<input id="dealer-postcode-input" type="tel" class="not-uniform form-control dealer-postcode-input"
									name="dealer-postcode-input" placeholder="Enter postcode">
								<button type="button" id="dealer-postcode-submit" class="dealer-postcode-submit"></button>
							</div>
						</div>

					</li>
					<li>
						<a href="/">Why Solahart?</a>
						<div class="mega-nav">

							<ul>
								<li><a href="https://www.solahart.com.au/why-solahart/about-us/">About Us</a></li>
								<li><a href="https://www.solahart.com.au/why-go-solar/">Why Go Solar?</a></li>
								<li><a href="https://www.solahart.com.au/why-solahart/the-solahart-difference/">The Solahart Difference</a></li>
								<li><a href="https://www.solahart.com.au/testimonials/">Testimonials</a></li>
								<li><a href="https://www.solahart.com.au/landing-pages/solar-hot-water/">Solar Hot Water</a></li>
								<li><a href="https://www.solahart.com.au/landing-pages/solar-power-pv/">Solar Power (PV)</a></li>
								<li><a href="https://www.solahart.com.au/products/battery-storage/">Battery Storage</a></li>
								<li><a href="https://www.solahart.com.au/why-solahart/dealership-opportunities/">Dealership Opportunities</a></li>
							</ul>
						</div>
					</li>
					<li>
						<a href="/products/">Residential Products</a>
						<div class="mega-nav">
							<span class="title">Browse by category</span>
							<div class="cat-links">
								<a href="https://www.solahart.com.au/products/solar-water-heating/" target="&quot;&quot;"
									onmouseover="$('img',this).attr('src','${commonResourcePath}/solahartstorefront/media/1020/icon-5-blue.png');"
									onmouseout="$('img',this).attr('src','${commonResourcePath}/solahartstorefront/media/1719/shw_icon_white.png');">
									<img src="${commonResourcePath}/solahartstorefront/media/1719/shw_icon_white.png" alt="" class="cat-ico">
									Roof Top Solar Hot Water </a>
								<a href="https://www.solahart.com.au/products/solar-power/" target="&quot;&quot;"
									onmouseover="$('img',this).attr('src','${commonResourcePath}/solahartstorefront/media/1953/sp_icon_blue.png');"
									onmouseout="$('img',this).attr('src','${commonResourcePath}/solahartstorefront/media/1720/sp_icon_white.png');">
									<img src="${commonResourcePath}/solahartstorefront/media/1720/sp_icon_white.png" alt="" class="cat-ico">
									Solar Power </a>
								<a href="https://www.solahart.com.au/products/battery-storage/" target="&quot;&quot;"
									onmouseover="$('img',this).attr('src','${commonResourcePath}/solahartstorefront/media/1956/bs_icon_blue.png');"
									onmouseout="$('img',this).attr('src','${commonResourcePath}/solahartstorefront/media/1715/bs_icon_white.png');">
									<img src="${commonResourcePath}/solahartstorefront/media/1715/bs_icon_white.png" alt="" class="cat-ico">
									Energy Storage </a>
								<a href="https://www.solahart.com.au/products/split-system/" target="&quot;&quot;"
									onmouseover="$('img',this).attr('src','${commonResourcePath}/solahartstorefront/media/1483/ico-6-blue.png');"
									onmouseout="$('img',this).attr('src','${commonResourcePath}/solahartstorefront/media/1723/shws_icon_white.png');">
									<img src="${commonResourcePath}/solahartstorefront/media/1723/shws_icon_white.png" alt="" class="cat-ico">
									Split Solar Hot Water </a>
								<a href="https://www.solahart.com.au/products/heat-pump/" target="&quot;&quot;"
									onmouseover="$('img',this).attr('src','${commonResourcePath}/solahartstorefront/media/1027/ico-4-blue.png');"
									onmouseout="$('img',this).attr('src','${commonResourcePath}/solahartstorefront/media/1724/hp_icon_white.png');">
									<img src="${commonResourcePath}/solahartstorefront/media/1724/hp_icon_white.png" alt="" class="cat-ico">
									Heat Pump Water Heaters </a>
							</div>

							<ul>
								<li><a href="https://www.solahart.com.au/products/">Browse our range</a></li>
								<li><a href="https://www.solahart.com.au/find-your-perfect-system/">Find your perfect system</a></li>
								<li><a href="https://www.solahart.com.au/landing-pages/forms/solar-water-heater-warranty-registration/">Solar Water Heater Warranty
										Registration</a></li>
							</ul>
						</div>
					</li>
					<li>
						<a href="https://www.solahart.com.au/landing-pages/commercial-solutions/">Commercial Solutions</a>
						<div class="mega-nav">

							<ul>
								<li><a href="https://www.solahart.com.au/landing-pages/commercial-solutions/">Commercial PV</a></li>
								<li><a href="https://www.solahart.com.au/commercial-solutions/solar-power-pv/">Solar Power (PV) Selector</a></li>
								<li><a href="https://www.solahart.com.au/commercial-solutions/solar-water-heating/">Solar Water Heating</a></li>
							</ul>
						</div>
					</li>
					<li>
						<a href="https://www.solahart.com.au/government-incentives/">Solar Rebates &amp; Incentives</a>
						<div class="mega-nav">

							<ul>
								<li><a href="https://www.solahart.com.au/government-incentives/">Government Incentives</a></li>
								<li><a href="https://www.solahart.com.au/landing-pages/victorian-solar-rebate/">Victorian Solar Rebate</a></li>
							</ul>
						</div>
					</li>
					<li>
						<a href="https://www.solahart.com.au/finance-news-offers/">Finance, News &amp; Offers</a>
						<div class="mega-nav">

							<ul>
								<li><a href="https://www.solahart.com.au/current-promotions/">Current Promotion</a></li>
								<li><a href="https://www.solahart.com.au/finance-news-offers/commercial-leasing/">Commercial Leasing</a></li>
								<li><a href="https://www.solahart.com.au/finance-news-offers/interest-free/">Interest Free Finance</a></li>
								<li><a href="https://www.solahart.com.au/finance-news-offers/news-solar-orphans/">Solar Orphans</a></li>
							</ul>
						</div>
					</li>
					<li class="footer-nav-item">
						<a href="https://www.solahart.com.au/contact-us/">Contact Us</a>
					</li>
					<li class="footer-nav-item">
						<a href="https://www.solahart.com.au/copyright-and-privacy/">Copyright and Privacy</a>
					</li>
					<li class="footer-nav-item">
						<a href="https://www.solahart.com.au/current-promotions/">Current Solahart Promotions</a>
					</li>
					<li class="footer-nav-item">
						<a href="https://www.solahart.com.au/dealers/">Dealers</a>
					</li>
					<li class="footer-nav-item">
						<a href="https://www.solahart.com.au/site-map/">Site Map</a>
					</li>
				</ul>



			</div>
		</div>
	</nav>
	<!-- 
	============================
	END SUB NAV 2
	============================ 
	-->





</div>














<div class="header-offset-spacer">
	&nbsp;
</div>


<header class="js-mainHeader">
	<nav class="navigation navigation--top hidden-xs hidden-sm">
		<div class="row">
			<div class="col-sm-12 col-md-4">
				<div class="nav__left js-site-logo">
					<cms:pageSlot position="SiteLogo" var="logo" limit="1">
						<cms:component component="${logo}" element="div" class="yComponentWrapper"/>
					</cms:pageSlot>
				</div>
			</div>
			<div class="col-sm-12 col-md-8">
				<div class="nav__right">
					<ul class="nav__links nav__links--account">
						<c:if test="${empty hideHeaderLinks}">
							<c:if test="${uiExperienceOverride}">
								<li class="backToMobileLink">
									<c:url value="/_s/ui-experience?level=" var="backToMobileStoreUrl" />
									<a href="${fn:escapeXml(backToMobileStoreUrl)}">
										<spring:theme code="text.backToMobileStore" />
									</a>
								</li>
							</c:if>

							<sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')">
								<c:set var="maxNumberChars" value="25" />
								<c:if test="${fn:length(user.firstName) gt maxNumberChars}">
									<c:set target="${user}" property="firstName"
										value="${fn:substring(user.firstName, 0, maxNumberChars)}..." />
								</c:if>

								<li class="logged_in js-logged_in">
									<ycommerce:testId code="header_LoggedUser">
										<spring:theme code="header.welcome" arguments="${user.firstName},${user.lastName}" />
									</ycommerce:testId>
								</li>
							</sec:authorize>

							 <cms:pageSlot position="HeaderLinks" var="link">
								 <cms:component component="${link}" element="li" />
							 </cms:pageSlot>

							<sec:authorize access="hasAnyRole('ROLE_ANONYMOUS')" >
								<li class="liOffcanvas">
									<ycommerce:testId code="header_Login_link">
										<c:url value="/login" var="loginUrl" />
										<a href="${fn:escapeXml(loginUrl)}">
											<spring:theme code="header.link.login" />
										</a>
									</ycommerce:testId>
								</li>
							</sec:authorize>

							<sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')" >
								<li class="liOffcanvas">
									<ycommerce:testId code="header_signOut">
										<c:url value="/logout" var="logoutUrl"/>
										<a href="${fn:escapeXml(logoutUrl)}">
											<spring:theme code="header.link.logout" />
										</a>
									</ycommerce:testId>
								</li>
							</sec:authorize>

						</c:if>
					</ul>
				</div>
			</div>
		</div>
	</nav>
	<!-- a hook for the my account links in desktop/wide desktop -->
	<div class="hidden-xs hidden-sm js-secondaryNavAccount collapse" id="accNavComponentDesktopOne">
		<ul class="nav__links">

		</ul>
	</div>
	<div class="hidden-xs hidden-sm js-secondaryNavCompany collapse" id="accNavComponentDesktopTwo">
		<ul class="nav__links js-nav__links">

		</ul>
	</div>
	<nav class="navigation navigation--middle js-navigation--middle">
		<div class="container-fluid">
			<div class="row">
				<div class="mobile__nav__row mobile__nav__row--table">
					<div class="mobile__nav__row--table-group">
						<div class="mobile__nav__row--table-row">
							<div class="mobile__nav__row--table-cell visible-xs hidden-sm">
								<button class="mobile__nav__row--btn btn mobile__nav__row--btn-menu js-toggle-sm-navigation"
										type="button">
									<span class="glyphicon glyphicon-align-justify"></span>
								</button>
							</div>

							<div class="mobile__nav__row--table-cell visible-xs mobile__nav__row--seperator">
								<ycommerce:testId code="header_search_activation_button">
									<button	class="mobile__nav__row--btn btn mobile__nav__row--btn-search js-toggle-xs-search hidden-sm hidden-md hidden-lg" type="button">
										<span class="glyphicon glyphicon-search"></span>
									</button>
								</ycommerce:testId>
							</div>

							<c:if test="${empty hideHeaderLinks}">
								<ycommerce:testId code="header_StoreFinder_link">
									<div class="mobile__nav__row--table-cell hidden-sm hidden-md hidden-lg mobile__nav__row--seperator">
										<c:url value="/store-finder" var="storeFinderUrl"/>
										<a href="${fn:escapeXml(storeFinderUrl)}" class="mobile__nav__row--btn mobile__nav__row--btn-location btn">
											<span class="glyphicon glyphicon-map-marker"></span>
										</a>
									</div>
								</ycommerce:testId>
							</c:if>

							<cms:pageSlot position="MiniCart" var="cart" element="div" class="miniCartSlot componentContainer mobile__nav__row--table hidden-sm hidden-md hidden-lg">
								<cms:component component="${cart}" element="div" class="mobile__nav__row--table-cell" />
							</cms:pageSlot>

						</div>
					</div>
				</div>
			</div>
			<div class="row desktop__nav">
				<div class="nav__left col-xs-12 col-sm-6">
					<div class="row">
						<div class="col-sm-2 hidden-xs visible-sm mobile-menu">
							<button class="btn js-toggle-sm-navigation" type="button">
								<span class="glyphicon glyphicon-align-justify"></span>
							</button>
						</div>
						<div class="col-sm-10">
							<div class="site-search">
								<cms:pageSlot position="SearchBox" var="component">
									<cms:component component="${component}" element="div"/>
								</cms:pageSlot>
							</div>
						</div>
					</div>
				</div>
				<div class="nav__right col-xs-6 col-xs-6 hidden-xs">
					<ul class="nav__links nav__links--shop_info">
						<li>
							<c:if test="${empty hideHeaderLinks}">
								<ycommerce:testId code="header_StoreFinder_link">
									<div class="nav-location hidden-xs">
										<c:url value="/store-finder" var="storeFinderUrl"/>
										<a href="${fn:escapeXml(storeFinderUrl)}" class="btn">
											<span class="glyphicon glyphicon-map-marker"></span>
										</a>
									</div>
								</ycommerce:testId>
							</c:if>
						</li>
						<li>
							<cms:pageSlot position="MiniCart" var="cart" element="div" class="componentContainer">
								<cms:component component="${cart}" element="div"/>
							</cms:pageSlot>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
	<a id="skiptonavigation"></a>
	<nav:topNavigation />
</header>

<cms:pageSlot position="BottomHeaderSlot" var="component" element="div"	class="container-fluid">
	<cms:component component="${component}" />
</cms:pageSlot>
