# 과제 템플릿

프론트엔드 과제에 참여하기 위해 기본적으로 세팅한 코드 템플릿

## 사용 스택

- typescript
- react
- nextjs
- scss
- react-query
- redux, redux-toolkit

### 셋업 순서

- 6667952162dca ts, react, nextjs 셋업
- c3f31320a74a8 Scss 셋업
- 9fa9fc7895156 reqct-query 셋업
- aa52ac296e35c redux, redux-toolkit 셋업

## 폴더 구조

```
src
├── app
│   ├── _components
│   │   ├── ReactQueryBoundry
│   │   │   └── index.tsx
│   │   └── ReactQueryUseSample
│   │       └── index.tsx
│   ├── favicon.ico
│   ├── globals.scss
│   ├── layout.tsx
│   ├── page.module.scss
│   └── page.tsx
└── services
    └── posts
        └── apis.ts
```

- app : React와 Next.js에 종속된 소스
- services : 비즈니스 소스 (독립)
