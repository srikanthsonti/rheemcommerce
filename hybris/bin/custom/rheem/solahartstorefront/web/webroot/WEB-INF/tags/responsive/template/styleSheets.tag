<%@ tag body-content="empty" trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<%@ taglib prefix="cms" tagdir="/WEB-INF/tags/responsive/template/cms" %>

<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic" />
<c:choose>
	<c:when test="${wro4jEnabled}">
		<link rel="stylesheet" type="text/css" media="all" href="${fn:escapeXml(contextPath)}/wro/all_responsive.css" />
		<link rel="stylesheet" type="text/css" media="all" href="${fn:escapeXml(contextPath)}/wro/${fn:escapeXml(themeName)}_responsive.css" />
		<link rel="stylesheet" type="text/css" media="all" href="${fn:escapeXml(contextPath)}/wro/addons_responsive.css" />
	</c:when>
	<c:otherwise>
		<%-- Theme CSS files --%>
		<link rel="stylesheet" type="text/css" media="all" href="${fn:escapeXml(themeResourcePath)}/css/style.css"/>
		<%--  AddOn Common CSS files --%>
		<c:forEach items="${addOnCommonCssPaths}" var="addOnCommonCss">
			<link rel="stylesheet" type="text/css" media="all" href="${fn:escapeXml(addOnCommonCss)}"/>
		</c:forEach>

		<%-- Add 3rd party css,js files --%>
		<link rel="stylesheet" type="text/css" media="all" href="${commonResourcePath}/solahartstorefront/scss/bootstrap.min.css"/>
		<link rel="stylesheet" type="text/css" media="all" href="${commonResourcePath}/solahartstorefront/css/font-banner.css"/>
		<link rel="stylesheet" type="text/css" media="all" href="${commonResourcePath}/solahartstorefront/scss/main.css?version=0.3.css"/>
		<link rel="stylesheet" type="text/css" media="all" href="${commonResourcePath}/solahartstorefront/scss/vendors/summernote.css"/>
		<link rel="stylesheet" type="text/css" media="all" href="${commonResourcePath}/solahartstorefront/scss/vendors/default.css"/>
		<link rel="stylesheet" type="text/css" media="all" href="${commonResourcePath}/solahartstorefront/scss/vendors/default.date.css"/>
		<link rel="stylesheet" type="text/css" media="all" href="${commonResourcePath}/solahartstorefront/scss/vendors/jquery.fancybox.css"/>
		<%-- End of 3rd party css,js files --%>


	</c:otherwise>
</c:choose>

<%--  AddOn Theme CSS files --%>
<c:forEach items="${addOnThemeCssPaths}" var="addOnThemeCss">
	<link rel="stylesheet" type="text/css" media="all" href="${fn:escapeXml(addOnThemeCss)}"/>
</c:forEach>

<cms:previewCSS cmsPageRequestContextData="${cmsPageRequestContextData}" />
