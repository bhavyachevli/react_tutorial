# GitHub Setup Instructions

Follow these steps to set up your project on GitHub:

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `react_tutorial`)
5. Choose public or private
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

Run these commands in your project directory:

```bash
# Add all files to git
git add .

# Create initial commit
git commit -m "Initial commit: Migrated to Vite + React"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `gh-pages` or `main`
   - Folder: `/ (root)` or `/docs` (if using docs folder)
5. Click **Save**

## Step 4: Enable GitHub Actions

The GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`. It will:

- Build your project on every push to main/master
- Deploy to GitHub Pages automatically
- Run on pull requests to verify builds

To enable:
1. Go to your repository **Settings**
2. Click **Actions** → **General**
3. Under **Workflow permissions**, select "Read and write permissions"
4. Check "Allow GitHub Actions to create and approve pull requests"
5. Click **Save**

## Step 5: Update Repository Name in Vite Config (if needed)

If your repository name is different from `react_tutorial`, update the base path in `vite.config.js`:

```javascript
base: process.env.GITHUB_ACTIONS ? '/YOUR_REPO_NAME/' : '/',
```

## Step 6: Verify Deployment

After pushing to GitHub:

1. Go to the **Actions** tab in your repository
2. You should see a workflow running
3. Once complete, your site will be available at:
   - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Troubleshooting

### If GitHub Actions fails:
- Check the **Actions** tab for error messages
- Ensure Node.js version matches (currently set to 22.x)
- Verify all dependencies are in `package.json`

### If pages don't load:
- Check the base path in `vite.config.js` matches your repo name
- Verify GitHub Pages is enabled in Settings
- Wait a few minutes for deployment to complete

### If images/assets don't load:
- Ensure all assets are in the `public/` folder
- Check that paths use `/` (absolute) not `../` (relative)
- Verify the build output in the `dist/` folder

## Additional Commands

### Update and push changes:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

### Check git status:
```bash
git status
```

### View remote repository:
```bash
git remote -v
```

## Need Help?

- [GitHub Docs](https://docs.github.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages Guide](https://docs.github.com/pages)

